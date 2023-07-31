"use client"
import React, {useEffect,useState} from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'



const Account = ()=>{
    const {data,error,isLoading} = useAuth()
    console.log(data)
    if (error) {
        return <div style={{margin:'15rem 0 0 0'}}>{error}</div>
    }
    else if (isLoading) {
        return <div style={{margin:'15rem 0 0 0'}}>Loading ...</div>
    }
    if (data){
        return <div style={{margin:'15rem 0 0 0'}}>{data.name}</div>
    }
}


export default Account

 

 