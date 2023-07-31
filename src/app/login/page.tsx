"use client"
import {FC,useState} from 'react'
import styles from '../register/register.module.scss'
import Link from 'next/link'
import validator from 'validator'
import { HandleLogin } from '../helpers/Login'
import axios from 'axios'


const Login: React.FC=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorServer,setErrorServer]=useState('')
    const handleFormSend=(e:React.MouseEvent<HTMLInputElement, MouseEvent>):void=>{
        e.preventDefault();
        if (!validator.isEmpty(email) && !validator.isEmpty(password)){
            HandleLogin(password,email,setErrorServer)
        }
        else{
            setErrorServer('Fill all fields on form')
        }
    }

    return <div className={styles.register__main}>
        <div className={styles.register__main__form}>
            <form>
                <div className={styles.register__main__form__header}>
                    <h3 style={{fontWeight:'bold'}}>Sign in</h3>
                    <p><Link href='/login'>I have an account</Link></p>
                </div>
                <input className={styles.register__main__form__input} type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <input className={styles.register__main__form__input} type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                {errorServer!=='' && <p className={styles.register__main__form__error}><svg className={styles.register__main__form__error__svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>{errorServer}</p>}
                <input className={styles.register__main__form__btn} type="submit" onClick={(e) =>handleFormSend(e)} value='Login'/>
                <p style={{fontSize:'0.7rem'}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
            </form>
        </div>
    </div>
}

export default Login
