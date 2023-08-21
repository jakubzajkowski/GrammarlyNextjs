import axios from 'axios';
import React from 'react';

export const HandleSearchDocument = (_id:string,doc:string,setFilterData:React.Dispatch<React.SetStateAction<string>>)=>{
    axios.post(`/api/search-document/${doc}`,{
        _id: _id
    }).then(({data})=>{
        if (data.error){
            console.log(data)
        }
        setFilterData(data.filteredDocument)
    }).catch(err=>console.log(err))
}