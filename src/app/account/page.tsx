"use client";
import React, { useState } from 'react'
import useAuth from '../hooks/useAuth'
import Loading from '../components/Loading'
import styles from './account.module.scss'
import Sidebar from './components/Sidebar';
import NewDoc from './components/NewDoc';
import Doc from './components/Doc';
import usePolling from '../hooks/usePolling';
import { HandleDeleteDocument } from '@/app/helpers/DeleteDocument'
import { HandleSearchDocument } from '../helpers/SearchDocument';
import CircularProgress from '@mui/material/CircularProgress'

const Account:React.FC=()=>{
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()
    const [filterInput,setFilterInput]=useState<string>('')
    const [filterData,setFilterData]=useState<any>()

    const handleSearch=(e:React.ChangeEvent<HTMLInputElement>):void=>{
        HandleSearchDocument(data?._id as string,e.target.value,setFilterData)
        setFilterInput(e.target.value)
    }

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
                <input placeholder='Search...' className={styles.account__content__search} type="text" onChange={(e)=>handleSearch(e)}/>
                <div className={styles.account__content__docs}>
                    <NewDoc _id={data._id}/>
                    {filterInput ? 
                    (filterData ? filterData.map((doc:any)=><Doc RestoreElement='' HandleDeleteDocument={HandleDeleteDocument} status={doc.status} title={doc.title} key={doc._id} _id={data._id} documentId={doc._id}/>) : <CircularProgress style={{margin: '5rem auto 1rem auto'}}/>)
                    : 
                    data.documents.map((doc : any)=><Doc RestoreElement='' HandleDeleteDocument={HandleDeleteDocument} status={doc.status} title={doc.title} key={doc._id} _id={data._id} documentId={doc._id}/>)}
                </div>
            </div>
        </div>
    }
}

export default Account



 

 