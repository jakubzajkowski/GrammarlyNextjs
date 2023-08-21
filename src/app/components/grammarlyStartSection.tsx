import React from 'react'
import styles from './grammarlystartsection.module.scss'
import Link from 'next/link'

interface GrammarlyStartSectionProps {
    text: string
    title : string
    content: 'img' | 'vid'
    src: string
    color: string
    bgColor: string
}

const GrammarlyStartSection:React.FC<GrammarlyStartSectionProps> = ({text,title,content,src,color,bgColor}) => {
  return (
        <div className={styles.start__main} style={{backgroundColor:bgColor,color:color}}>
            <div className={styles.start__main__left}>
            <h1 className={styles.start__left__heading}>{title}</h1>
            <p className={styles.start__left__note}>{text}</p>
            <div>
                <button className={styles.start__left__register}><Link href='/register' style={{textDecoration:'none',color:'white'}}>Get Grammarly it's free</Link></button>
                <button className={styles.start__left__login}><Link href='/login' style={{textDecoration:'none',color:'black'}}>Log in</Link></button>
            </div>
            <p data-testid='policy' className={styles.start__left__policy}>By signing up, you agree to the <Link href='/'>Terms and Conditions</Link> and <Link href='/'>Privacy Policy</Link>. California residents, see our <Link href='/'>CA Privacy Notice.</Link></p>
            </div>
            <div className={styles.start__main__right}>
                {content=='img' ? 
                <img className={styles.start__main__right__video} src={src} alt='grammarly' loading='lazy'/> 
                :
                <video className={styles.start__main__right__video} autoPlay loop muted>
                    <source data-testid='vid-start' src={src} type="video/mp4"/>
                </video>
                }
            </div>
        </div>
    )
}

export default GrammarlyStartSection