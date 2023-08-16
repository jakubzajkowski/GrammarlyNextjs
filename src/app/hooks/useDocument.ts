import axios from 'axios';
import { useState,useEffect } from 'react';

interface DataType {
    date: string
    status: string
    text: string
    title: string
    _id: string
    language: string
}

const useDocument = (_id:string, document_id: string)=>{
    const [error,setError]=useState('')
    const [document,setDocument] :[undefined | DataType, React.Dispatch<React.SetStateAction<undefined | DataType>>] =useState()
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(`/api/document/${_id}/${document_id}`).then(({data})=>{
            if(data.error){
                setError('Your Are Not Authorized')
            }
            else{
                setDocument(data)
                setIsLoading(false)
            }
        }).catch(err=>setError(err))
    },[])

    return {document,error,isLoading}
}

export default useDocument