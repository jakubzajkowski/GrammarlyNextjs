import axios from 'axios';
import React from 'react';

export const HandleEditEmail = (password: string,email: string,newEmail:string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post('/api/edit-email',{
        password: password,
        email: email,
        newEmail:newEmail
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