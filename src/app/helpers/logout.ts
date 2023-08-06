import axios from 'axios';

export const HandleLogout = ()=>{
    axios.post('/api/logout',{}).then((res)=>{
        console.log(res)
    }).catch(err=>console.log(err))
}