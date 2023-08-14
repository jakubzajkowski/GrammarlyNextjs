import axios from 'axios';

export const HandleCheckText = (text:string,setTextSuggest:React.Dispatch<React.SetStateAction<undefined | string >>,setCorrect:React.Dispatch<React.SetStateAction<boolean>>)=>{
    axios.post('/api/text-check',{
        text: text
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
        else{
            console.log(data)
            if (data.success.correct==false){
                setCorrect(false)
                setTextSuggest(data.success.text)
            }
            else{
                setCorrect(true)
                setTextSuggest(data.success.text)
            }
        }
    }).catch(err=>console.log(err))
}