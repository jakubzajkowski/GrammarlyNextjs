import axios from 'axios';

export const HandleCheckText = (text:string,setTextSuggest:React.Dispatch<React.SetStateAction<undefined | string >>)=>{
    axios.post('/api/text-check',{
        text: text
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
        else{
            setTextSuggest(data.success)
        }
    }).catch(err=>console.log(err))
}