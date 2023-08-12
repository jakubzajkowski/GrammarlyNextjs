import axios from 'axios';

export const HandleCheckText = (text:string)=>{
    axios.post('/api/text-check',{
        text: text
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
    }).catch(err=>console.log(err))
}