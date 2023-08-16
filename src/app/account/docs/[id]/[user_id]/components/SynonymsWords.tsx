import React,{useRef,useEffect} from 'react'
import styles from './correcttext.module.scss'

interface SynonymsWordsProps {
    text: string
    setWordSuggest: React.Dispatch<React.SetStateAction<undefined | string >>
}

const SynonymsWords:React.FC<SynonymsWordsProps> = ({text,setWordSuggest}) => {
    const refCorrectText=useRef<any>(null)
    useEffect(()=>{
        refCorrectText.current.innerHTML=text
    },[])
    const handleCloseSynonyms=()=>{
        setWordSuggest('')
    }

    return (
    <div className={styles.correct_text__container}>
        <div className={styles.correct_text__container__header}>
            <svg className={styles.correct_text__container__header__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg> 
            <p>Correctness - Change forms of the verbs</p>
        </div>
        <div ref={refCorrectText}></div>
        <div className={styles.correct_text__container__footer}>
            <button className={styles.correct_text__container__btn__accept} onClick={handleCloseSynonyms}>OK</button>
        </div>
    </div>
  )
}

export default SynonymsWords