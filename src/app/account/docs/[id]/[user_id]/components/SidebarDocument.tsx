import React,{useState} from 'react'
import styles from './sidebardocument.module.scss'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SidebarDocumentList } from './lists/SidebarDocumentList'
import SideBarDocumentSection from './SideBarDocumentSection'
import usePolling from '@/app/hooks/usePolling'
import CircularProgress from '@mui/material/CircularProgress'
import { Country } from './CountrySelect'


interface SidebarDocumentProps{
    setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>
    textRef: any
    title: string
}

const SidebarDocument:React.FC<SidebarDocumentProps>= ({setIsSidebar,textRef,title}) => {
  const {data,errorPoll} = usePolling()
  return (
    <motion.div initial={{ x: '-100%' }} onMouseLeave={()=>setIsSidebar(false)} animate={{ x: '0%' }} exit={{ x: '-100%' }} transition={{duration:0.4,ease:'easeInOut'}} className={styles.sidebar__document}>
        <div onClick={()=>setIsSidebar(false)} className={styles.sidebar__document__container__close}>
            <svg className={styles.sidebar__document__close} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            <p className={styles.sidebar__document__close__text}>Close</p>
        </div>
        <hr />
        <div className={styles.sidebar__document__container}>
            <Link href="/account" className={styles.sidebar__document__link}><svg className={styles.sidebar__document__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg></Link>
            <Link href="/account" className={styles.sidebar__document__link}><p className={styles.sidebar__document__close__text}>My Grammarly</p></Link>
        </div>
        <p className={styles.sidebar__document__section}>DOCUMENT</p>
        {SidebarDocumentList.map(section => <SideBarDocumentSection title={title} key={section.text} textRef={textRef} text={section.text} icon={section.icon}/>)}
        <p className={styles.sidebar__document__section}>EDIT</p>
        <div className={styles.sidebar__document__container}>
            <svg className={styles.sidebar__document__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>
            <label className={styles.sidebar__document__close__text} htmlFor="country">Language Preferences</label>      
            {data && <Country userId={data._id}/>}
        </div>
        <p className={styles.sidebar__document__section}>ACCOUNT</p>
        <div className={styles.sidebar__document__container}>
            {data ? <p className={styles.sidebar__document__close__text} style={{margin:'0 1rem',fontWeight:'bold'}}>{data.name}</p> : <CircularProgress style={{margin:'0 1rem'}}/>}
        </div>
        <div className={styles.sidebar__document__container}>
            {data ? <p className={styles.sidebar__document__close__text} style={{margin:'0 1rem'}}>{data.email}</p> : <CircularProgress style={{margin:'0 1rem'}}/>}
        </div>
    </motion.div>
  )
}

export default SidebarDocument