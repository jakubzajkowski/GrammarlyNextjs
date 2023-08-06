"use client";
import React from 'react'
import useAuth from '../hooks/useAuth'
import Loading from '../components/Loading'
import styles from './account.module.scss'
import Sidebar from './components/Sidebar';
import NewDoc from './components/NewDoc';
import Doc from './components/Doc';
import usePolling from '../hooks/usePolling';



export default function Account() {
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()
    if (error) {
        return <div>{error}</div>
    }
    else if (isLoading || !data) {
        return <Loading />
    }
    if (isLogged && data){
        return <div className={styles.account}>
            <Sidebar email={data?.email} />
            <div className={styles.account__content}>
                <input placeholder='Search...' className={styles.account__content__search} type="text" />
                <div className={styles.account__content__docs}>
                    <NewDoc />
                    {data.documents.map(doc=><Doc title={doc.title} key={doc._id}/>)}
                </div>
            </div>
        </div>
    }
}



 

 