import axios from 'axios';
import React from 'react';

export const HandleEditName = (email: string,newName:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post('/api/edit-name',{
        email: email,
        newName:newName
    }).then(({data})=>{
        if (data.error){
            errorServer(data.error)
            console.log(data.error)
        }
        else{
            errorServer('Success')
        }
    }).catch(err=>console.log(err))
}