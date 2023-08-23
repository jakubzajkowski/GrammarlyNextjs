import axios from 'axios';

export const HandleTranslateText = (text:string,language: string,setLoading:React.Dispatch<React.SetStateAction<boolean>>,setText:React.Dispatch<React.SetStateAction<string | Element | undefined>>,setTranslateText:React.Dispatch<React.SetStateAction<boolean>>,_id:string)=>{
    setLoading(true)
    axios.post(`${process.env.NEXT_PUBLIC_URI}/text-translate`,{
        text: text,
        language: language,
        _id:_id
    }).then(({data})=>{
        setLoading(false)
        if (data.error){
            console.log(data)
        }
        else{
           setText(data.success.text)
           setTranslateText(true)
        }
    }).catch(err=>{console.log(err);setLoading(false)})
}