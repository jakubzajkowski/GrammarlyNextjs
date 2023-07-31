import axios from 'axios';
import React from 'react';

export const HandleLogin = (password: string,email: string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post('/api/login',{
        password: password,
        email: email,
    }).then(({data})=>{
        if (data.error){
            errorServer(data.error)
            console.log(data)
        }
        else{
            console.log('login')
            console.log(data)
            window.location.href='/account'
        }
    }).catch(err=>console.log(err))
}