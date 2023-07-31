import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';

interface dataType {
    _id: string,
    name: string,
    email: string,
    password: string,
    __v: number
}

const useAuth = ()=>{
    const [error,setError]=useState('')
    const [data,setData]: [dataType | undefined,React.Dispatch<React.SetStateAction<dataType | undefined>>]=useState()
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get('/api/user').then(({data})=>{
            if(data.error){
                setError('Your Are Not Authorized')
            }
            else{
                setData(data)
                setIsLoading(false)
            }
        }).catch(err=>setError(err))
    },[])

    return {data,error,isLoading}
}

export default useAuth