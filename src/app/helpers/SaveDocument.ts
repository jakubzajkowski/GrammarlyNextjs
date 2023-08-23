import axios from 'axios';

export const HandleSaveDocument = (_id:string,documentId:string,title:string,text:string)=>{
    axios.post(`${process.env.NEXT_PUBLIC_URI}/save-document`,{
        _id: _id,
        documentId: documentId,
        title:title,
        text:text
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
    }).catch(err=>console.log(err))
}