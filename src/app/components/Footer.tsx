import {FC} from 'react'
import styles from './footer.module.scss'


const Footer:React.FC = ()=>{
   return <div className={styles.footer__container}>
            <div className={styles.footer}>
                <ul>
                    <h1 className={styles.footer__header}>Get Grammarly</h1>
                    <li className={styles.footer__option}>Grammarly for Your Desktop</li>
                    <li className={styles.footer__option}>Grammarly for Windows</li>
                    <li className={styles.footer__option}>Grammarly for Mac</li>
                    <li className={styles.footer__option}>Grammarly Browser Extension</li>
                    <li className={styles.footer__option}>Grammarly for Chrome</li>
                    <li className={styles.footer__option}>2023 © Grammarly Inc.</li>
                </ul>
                <ul>
                    <h1 className={styles.footer__header}>Learn More</h1>
                    <li className={styles.footer__option}>Plans</li>
                    <li className={styles.footer__option}>Grammarly Premium</li>
                    <li className={styles.footer__option}>Grammarly Business</li>
                    <li className={styles.footer__option}>Grammarly for Education</li>
                    <li className={styles.footer__option}>GrammarlyGO</li>
                </ul>
                <ul>
                    <h1 className={styles.footer__header}>Features</h1>
                    <li className={styles.footer__option}>Grammar Checker</li>
                    <li className={styles.footer__option}>Plagiarism Checker</li>
                    <li className={styles.footer__option}>Citation Generator</li>
                    <li className={styles.footer__option}>Essay Checker</li>
                    <li className={styles.footer__option}>Paraphrasing Tool</li>
                </ul>
                <ul>
                    <h1 className={styles.footer__header}>Company</h1>
                    <li className={styles.footer__option}>About</li>
                    <li className={styles.footer__option}>Responsible AI</li>
                    <li className={styles.footer__option}>Careers & Culture</li>
                    <li className={styles.footer__option}>Press</li>
                    <li className={styles.footer__option}>Affiliates</li>
                    <li className={styles.footer__option}>Partners</li>
                </ul>
            </div>
        </div>
}

export default Footer