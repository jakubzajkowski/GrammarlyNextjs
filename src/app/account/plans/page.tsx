"use client"
import React, { useState } from 'react'
import useAuth from '@/app/hooks/useAuth'
import usePolling from '@/app/hooks/usePolling'
import Loading from '@/app/components/Loading'
import Sidebar from '../components/Sidebar'
import styles from './plans.module.scss'
import { PlansList } from './list/PlansList'
import PlansContainer from './components/PlansContainer'

const Plans: React.FC = () => {
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()

    if (error) {
        return <div>{error}</div>
    }
    else if (isLoading || !data) {
        return <Loading />
    }
    if (isLogged && data){
        return <div className={styles.plans}>
            <Sidebar email={data?.email} />
            <div className={styles.plans__main}>
                <h1 style={{fontWeight:'bold'}}>Subscription</h1>
                <p>See your current plan details. Choose a plan to ensure that everything you write is clear, engaging, and polished.</p>
                <div className={styles.plans__container}>
                    {PlansList.map(plan=><PlansContainer plan={plan.plan} planSelected={data.plan} header={plan.header} planName={plan.planName} desc={plan.desc} btnName={plan.btnName} planFunctions={plan.planFunctions}/>)}
                </div>
            </div>
        </div>
    }
}

export default Plans