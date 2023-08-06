import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

interface dataDocumnetsType {
        title:string
        text:string
        status:string
        _id:string
        date:string
}

interface dataType {
    _id: string,
    name: string,
    email: string,
    password: string,
    __v: number,
    documents: dataDocumnetsType[]
}
const usePolling = ()=>{
    const [errorPoll,setErrorPoll]=useState('')
    const [data,setData]: [dataType | undefined,React.Dispatch<React.SetStateAction<dataType | undefined>>]=useState()

    useEffect(()=>{
        const poll = ():void=>{
            axios.get('/api/user').then(({data})=>{
                if(data.error){
                    setErrorPoll('Your Are Not Authorized')
                }
                else{
                    setData(data)
                }
            }).catch(err=>setErrorPoll(err))
        }
        const interval = setInterval(poll, 1000);
        return () => clearInterval(interval);
    },[])

    return {data,errorPoll}
}

export default usePolling