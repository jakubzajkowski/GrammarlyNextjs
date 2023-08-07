import axios from 'axios';
import React from 'react';

export const HandleEditPassword = (password: string,email: string,newPassword:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post('/api/edit-email',{
        password: password,
        email: email,
        newPassword:newPassword
    }).then(({data})=>{
        if (data.error){
            errorServer(data.error)
            console.log(data.error)
        }
    }).catch(err=>console.log(err))
}