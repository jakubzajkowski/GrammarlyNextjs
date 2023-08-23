import axios from 'axios';
import React from 'react';

export const HandleLogin = (password: string,email: string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post(`${process.env.NEXT_PUBLIC_URI}/login`,{
        password: password,
        email: email,
    },{withCredentials:true}).then(({data})=>{
        if (data.error){
            errorServer(data.error)
        }
        else{
            localStorage.setItem('token', data.token);
            window.location.href='/account'
        }
    }).catch(err=>console.log(err))
}