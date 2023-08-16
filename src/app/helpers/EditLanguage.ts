import axios from 'axios';

export const HandleEditLanguage = (_id:string,documentId:string,language:string)=>{
    axios.post('/api/language-document',{
        _id: _id,
        documentId:documentId,
        language: language
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
    }).catch(err=>console.log(err))
}