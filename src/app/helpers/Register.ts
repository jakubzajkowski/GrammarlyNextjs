import axios from 'axios';
import React from 'react';

export const HandleRegister = (password: string,email: string,name: string,errorServer:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post('/api/register',{
        password: password,
        email: email,
        name: name
    }).then(({data})=>{
        if (data.error){
            errorServer(data.error)
            console.log(data)
        }
        else{
            console.log('login')
            console.log(data)
            window.location.href='/login'
        }
    }).catch(err=>console.log(err))
}