"use client";
import React from 'react'
import useAuth from '../hooks/useAuth'
import Loading from '../components/Loading'
import styles from './account.module.scss'
import Sidebar from './components/Sidebar';



export default function Account() {
    const {data,error,isLoading} = useAuth()
    if (error) {
        return <div>{error}</div>
    }
    else if (isLoading) {
        return <Loading />
    }
    if (data){
        return <div className={styles.account}>
            <Sidebar email={data?.email} />
        </div>
    }
}



 

 