import axios from 'axios';

export const HandleEditLanguage = (_id:string,documentId:string,language:string,setDocument:React.Dispatch<any> | undefined)=>{
    axios.post('/api/language-document',{
        _id: _id,
        documentId:documentId,
        language: language
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
    }).then(()=>{
    axios.get(`/api/document/${_id}/${documentId}`).then(({data})=>{
        if (setDocument){
            setDocument(data)
        }
    }).catch(err=>console.log(err))})
}