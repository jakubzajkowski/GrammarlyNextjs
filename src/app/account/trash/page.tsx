"use client"
import React, { useState } from 'react'
import useAuth from '@/app/hooks/useAuth'
import usePolling from '@/app/hooks/usePolling'
import Loading from '@/app/components/Loading'
import Sidebar from '../components/Sidebar'
import styles from './trash.module.scss'
import Doc from '../components/Doc'
import { HandleDeleteTrashDocument } from '@/app/helpers/DeleteTrashDocument'
import { HandleRestoreTrashDocument } from '@/app/helpers/RestoreTrashDocument'

export interface RestoreElementProps{
    _id : string
    documentId :string
}

const Settings: React.FC = () => {
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()

    const RestoreElement: React.FC<RestoreElementProps>=({_id,documentId})=> <svg onClick={()=>HandleRestoreTrashDocument(_id,documentId)} style={{ width: '20px',height: '20px',fill: 'red',margin: '0.5rem 0.2rem'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"/></svg>

    if (error) {
        return <div>{error}</div>
    }
    else if (isLoading || !data) {
        return <Loading />
    }
    if (isLogged && data){
        return <div className={styles.trash}>
            <Sidebar email={data?.email} />
            <div className={styles.trash__content}>
                <h1 style={{fontWeight:'bold'}}>Trash</h1>
                <input placeholder='Search...' className={styles.trash__content__search} type="text" />
                <div className={styles.trash__content__docs}>
                    {data.trashs.map(doc=><Doc RestoreElement={RestoreElement} HandleDeleteDocument={HandleDeleteTrashDocument} status={doc.status} title={doc.title} key={doc._id} _id={data._id} documentId={doc._id}/>)}
                </div>
            </div>
        </div>
    }
}

export default Settings