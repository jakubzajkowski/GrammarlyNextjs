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

const useAuth = ()=>{
    const [error,setError]=useState('')
    const [isLogged,setIsLogged]=useState(false)
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get('/api/user').then(({data})=>{
            if(data.error){
                setError('Your Are Not Authorized')
            }
            else{
                setIsLogged(true)
                setIsLoading(false)
            }
        }).catch(err=>setError(err))
    },[])

    return {isLogged,error,isLoading}
}

export default useAuth