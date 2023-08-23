import axios from 'axios';

export const HandleLogout = ()=>{
    localStorage.removeItem('token');
}