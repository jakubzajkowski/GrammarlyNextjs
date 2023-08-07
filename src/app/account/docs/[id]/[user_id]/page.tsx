"use client"
import React,{useContext, useEffect, useState} from "react"
import styles from './docs.module.scss'
import useDocument from "@/app/hooks/useDocument"
import Loading from "@/app/components/Loading"


interface DocsProps {
  params: {
    id: string
    user_id: string
  }
}

const Doc: React.FC<DocsProps>= ({params}) => {
  const {document,error,isLoading} = useDocument(params.user_id,params.id)
  const [text,setText]:[undefined | string, React.Dispatch<React.SetStateAction<undefined | string>>] = useState()
  const [title,setTitle]:[undefined | string, React.Dispatch<React.SetStateAction<undefined | string>>] = useState()

  useEffect(()=>{
    setText(document?.text)
    setTitle(document?.title)
  },[document])

  if (isLoading && ! document) return <Loading />

  if (error) return <div>{error}</div>

  if (document) return (
    <div className={styles.doc}>
      <div className={styles.doc__document}>
        <input type="text" className={styles.doc__document__title} placeholder={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea onChange={(e)=>setText(e.target.value)} className={styles.doc__document__text} placeholder="Type or Paste (Ctrl+V) your text or upload document" value={text}></textarea>
      </div>
      <div className={styles.doc__suggestions}>
        
      </div>
    </div>
  )
}

export default Doc