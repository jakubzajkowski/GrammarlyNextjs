"use client";
import React from 'react'
import useAuth from '../hooks/useAuth'
import Loading from '../components/Loading'
import styles from './account.module.scss'



export default function Account() {
    const {data,error,isLoading} = useAuth()
    console.log(data)
    if (error) {
        return <div style={{margin:'15rem 0 0 0'}}>{error}</div>
    }
    else if (isLoading) {
        return <Loading />
    }
    if (data){
        return <div style={{margin:'15rem 0 0 0'}}>{data.name}</div>
    }
}



 

 