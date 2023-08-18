import axios from 'axios';
import React from 'react';

export const HandleAddDocument = (_id:string)=>{
    axios.post('/api/add-document',{
        _id: _id
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
        window.location.href=`/account/docs/${data.documentId}/${data._id}`
    }).catch(err=>console.log(err))
}