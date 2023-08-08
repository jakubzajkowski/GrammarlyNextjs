import axios from 'axios';

export const HandleRestoreTrashDocument = (_id:string,documentId:string)=>{
    axios.post('/api/trash-restore-document',{
        _id: _id,
        documentId: documentId
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
    }).catch(err=>console.log(err))
}