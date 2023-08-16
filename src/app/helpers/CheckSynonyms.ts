import axios from 'axios';

export const HandleCheckWord = (word:string,language: string,setWordSuggest:React.Dispatch<React.SetStateAction<undefined | string >>,setLoading:React.Dispatch<React.SetStateAction<boolean>>)=>{
    setLoading(true)
    axios.post('/api/synonyms-check',{
        word: word,
        language: language
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
        console.log(data.success.words)
        setWordSuggest(data.success.words)
        setLoading(false)
    
    }).catch(err=>{console.log(err);setLoading(false)})
}