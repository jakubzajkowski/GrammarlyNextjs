import styles from './sidebardocument.module.scss'
import React from 'react'
import ReactToPrint from 'react-to-print';

interface SideBarDocumentSectionProps {
    icon: React.ReactElement
    text: string
    textRef: any
    title: string
}

const SideBarDocumentSection:React.FC<SideBarDocumentSectionProps>=({text,icon,textRef,title})=>{
    const fileName =  `${title}.docx`
    const downloadInnerHtml=(filename:string)=>{
        if (document){
            const elHtml = document.getElementById('content');
            const link = document.createElement('a');
            link.setAttribute('download', filename);   
            link.setAttribute('href', 'data:' + 'text/doc' + ';charset=utf-8,' + encodeURIComponent(elHtml?.innerHTML as string));
            link.click(); 
        }
       }

    if (text=='Print document') return (
        <ReactToPrint
        trigger={() => <div className={styles.sidebar__document__container}>
            {icon}
            <p className={styles.sidebar__document__close__text}>{text}</p>
        </div>}
        content={() => textRef.current}
        >
        </ReactToPrint>
  )
  else if (text=='Download document') return (
    <div className={styles.sidebar__document__container} onClick={()=>downloadInnerHtml(fileName)}>
        {icon}
        <p className={styles.sidebar__document__close__text}>{text}</p>
    </div>
  )
  else{
    return (
        <div className={styles.sidebar__document__container}>
            {icon}
            <p className={styles.sidebar__document__close__text}>{text}</p>
        </div>
      )
  }
}

export default SideBarDocumentSection