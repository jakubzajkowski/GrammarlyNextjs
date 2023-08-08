import React from 'react'
import styles from '../account.module.scss'
import Link from 'next/link'

interface DocProps {
    title: string,
    status: string,
    _id: string,
    documentId: string
    HandleDeleteDocument : (_id: string, documentId: string) => void
}

const Doc : React.FC<DocProps> = ({title,status,documentId,_id,HandleDeleteDocument}) => {
  return (
    <div className={styles.newdoc}>
        <div className={styles.newdoc__up}>
            <Link href={`/account/docs/${documentId}/${_id}`} style={{textDecoration:' none',color:'black'}}>
              <svg className={styles.newdoc__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
              <p className={styles.newdoc__text}>{title}</p>
            </Link>
        </div>
        <div className={styles.newdoc__down}>
            <p className={styles.newdoc__text__upload}>{status}</p>
            <svg className={styles.newdoc__icon__upload} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            <svg className={styles.newdoc__icon__upload} onClick={()=>HandleDeleteDocument(_id,documentId)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>
        </div>
    </div>
  )
}

export default Doc