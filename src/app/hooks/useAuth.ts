import axios from 'axios';
import { useState,useEffect } from 'react';


const useAuth = ()=>{
    const [error,setError]=useState('')
    const [isLogged,setIsLogged]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        const token = localStorage.getItem('token');
        setIsLoading(true)
        axios.get(`${process.env.NEXT_PUBLIC_URI}/user`,{headers:{Authorization: `Bearer ${token}`}}).then(({data})=>{
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