import axios from 'axios';

export const HandleCheckText = (text:string,setTextSuggest:React.Dispatch<React.SetStateAction<undefined | string >>,setCorrect:React.Dispatch<React.SetStateAction<boolean>>,setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setLoading(true)
    axios.post('/api/text-check',{
        text: text
    }).then(({data})=>{
        setLoading(false)
        if (data.error){
            console.log(data)
        }
        else{
            if (data.success.correct==false){
                setCorrect(false)
                setTextSuggest(data.success.text)
            }
            else{
                setCorrect(true)
                setTextSuggest(data.success.text)
            }
        }
    }).catch(err=>{console.log(err);setLoading(false)})
}