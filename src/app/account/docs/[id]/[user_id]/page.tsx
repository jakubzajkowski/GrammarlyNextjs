"use client"
import React,{useRef, useEffect, useState} from "react"
import styles from './docs.module.scss'
import useDocument from "@/app/hooks/useDocument"
import Loading from "@/app/components/Loading"
import { HandleSaveDocument } from "@/app/helpers/SaveDocument"
import ContentEditable from 'react-contenteditable'
import TextCustomBar from "./components/TextCustomBar"


interface DocsProps {
  params: {
    id: string
    user_id: string
  }
}

const Doc: React.FC<DocsProps>= ({params}) => {
  const {document,error,isLoading} = useDocument(params.user_id,params.id)
  const [text,setText]:[undefined | string | Element, React.Dispatch<React.SetStateAction<undefined | string | Element>>] = useState()
  const [title,setTitle]:[undefined | string, React.Dispatch<React.SetStateAction<undefined | string>>] = useState()
  const textRef = useRef<any>(null)

  useEffect(()=>{
    setText(document?.text)
    setTitle(document?.title)
  },[document])

  useEffect(()=>{
      HandleSaveDocument(params.user_id,params.id,title as string,text as string)
  },[text,title])

  const handleChange = (evt:any) => {
    setText(evt.target.value);
    console.log(text)
  };

  if (isLoading && ! document) return <Loading />

  if (error) return <div>{error}</div>

  if (document) return (
    <div className={styles.doc}>
      <div className={styles.doc__document}>
        <input type="text" className={styles.doc__document__title} placeholder={title} onChange={(e)=>setTitle(e.target.value)}/>
        <TextCustomBar textRef={textRef}/>
        <ContentEditable
              innerRef={textRef}
              html={text ? (text as string) : ''}   
              onChange={(e)=>handleChange(e)} 
              data-placeholder='Type or paste (Ctrl + V ) your text here or upload from document'
              className={styles.doc__document__text}
            />
      </div>
      <div className={styles.doc__suggestions}>
        <h5 className={styles.doc__suggestions__title}>All Suggestions</h5>
        <div className={styles.doc__suggestions__inactive}>
          <img className={styles.doc__suggestions__inactive__img} src="https://baza-wiedzy.bhpin.pl/wp-content/uploads/2023/05/undraw_My_password_re_ydq7.png" alt="" />
        </div>
      </div>
    </div>
  )
}
export default Doc