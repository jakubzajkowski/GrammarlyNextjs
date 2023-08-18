"use client"
import React from 'react'
import useAuth from '@/app/hooks/useAuth'
import usePolling from '@/app/hooks/usePolling'
import Loading from '@/app/components/Loading'
import Sidebar from '../components/Sidebar'
import styles from './apps.module.scss'

const Apps = () => {
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()

    if (error) {
        return <div>{error}</div>
    }
    else if (isLoading || !data) {
        return <Loading />
    }
    if (isLogged && data){
        return <div className={styles.apps}>
            <Sidebar email={data?.email} />
            <div className={styles.apps__content}>
                <h1 style={{fontWeight:'bold'}}>Apps</h1>
            </div>
        </div>
    }
}

export default Apps