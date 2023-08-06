import React from 'react'
import styles from '../account.module.scss'
import { HandleAddDocument } from '@/app/helpers/AddDocument'

interface NewDocProps{
    _id : string
}


const NewDoc: React.FC<NewDocProps> = ({_id}) => {
  return (
    <div className={styles.newdoc}>
        <div className={styles.newdoc__up} onClick={()=>HandleAddDocument(_id)}>
            <svg className={styles.newdoc__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/></svg>
            <p className={styles.newdoc__text}>New</p>
        </div>
        <div className={styles.newdoc__down}>
            <svg className={styles.newdoc__icon__upload} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"/></svg>
            <p className={styles.newdoc__text__upload}>Upload</p>
        </div>
    </div>
  )
}

export default NewDoc