import React from "react"
import styles from './docs.module.scss'


interface DocsProps {
  params: {
    id: string
  }
}

const Doc: React.FC<DocsProps>= ({params}) => {
  return (
    <div className={styles.doc}>
      <div className={styles.doc__document}>
        <input type="text" className={styles.doc__document__title} placeholder='Untitled Document'/>
        <textarea className={styles.doc__document__text} placeholder="Type or Paste (Ctrl+V) your text or upload document"></textarea>
      </div>
      <div className={styles.doc__suggestions}>
        
      </div>
    </div>
  )
}

export default Doc