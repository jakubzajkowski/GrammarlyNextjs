"use client"
import React, { useState } from 'react'
import useAuth from '@/app/hooks/useAuth'
import usePolling from '@/app/hooks/usePolling'
import Loading from '@/app/components/Loading'
import Sidebar from '../components/Sidebar'
import styles from './trash.module.scss'
import Doc from '../components/Doc'
import { HandleDeleteTrashDocument } from '@/app/helpers/DeleteTrashDocument'

const Settings: React.FC = () => {
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()
    const [modal,setModal] = useState('')

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
                    {data.trashs.map(doc=><Doc HandleDeleteDocument={HandleDeleteTrashDocument} status={doc.status} title={doc.title} key={doc._id} _id={data._id} documentId={doc._id}/>)}
                </div>
            </div>
        </div>
    }
}

export default Settings