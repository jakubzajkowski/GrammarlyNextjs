"use client";
import React from 'react'
import useAuth from '../hooks/useAuth'
import Loading from '../components/Loading'
import styles from './account.module.scss'
import Sidebar from './components/Sidebar';
import NewDoc from './components/NewDoc';
import Doc from './components/Doc';
import usePolling from '../hooks/usePolling';
import { HandleDeleteDocument } from '@/app/helpers/DeleteDocument'


const Account:React.FC=()=>{
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
                <h1 style={{fontWeight:'bold'}}>Documents</h1>
                <input placeholder='Search...' className={styles.account__content__search} type="text" />
                <div className={styles.account__content__docs}>
                    <NewDoc _id={data._id}/>
                    {data.documents.map(doc=><Doc RestoreElement='' HandleDeleteDocument={HandleDeleteDocument} status={doc.status} title={doc.title} key={doc._id} _id={data._id} documentId={doc._id}/>)}
                </div>
            </div>
        </div>
    }
}

export default Account



 

 