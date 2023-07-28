"use client"
import { useState} from "react"
import validator from 'validator';

interface useValidatorTypes {
    errorEmail: string
    errorPassword: string
    errorName: string
    validate: (email: string, password: string, name: string) => boolean
}
interface errorType {
    emailError:''|'Fill this field in form' | 'Invalid email address'
    passwordError:'' | 'Fill this field in form' | 'Your password must contain at least 8 characters'
    nameError:'' | 'Fill this field in form'
}

const useValidator=():useValidatorTypes=>{
    const [errorEmail,setErrorEmail]=useState('')
    const [errorPassword,setErrorPassword]=useState('')
    const [errorName,setErrorName]=useState('')


    const validate = (email:string,password:string,name:string):boolean=>{
        const error : errorType={
            emailError:'',
            passwordError:'',
            nameError:''
        }
        if (validator.isEmpty(email)){
            error.emailError='Fill this field in form'
            setErrorEmail(error.emailError)
        }
        else{
            if (!validator.isEmail(email)){
                error.emailError='Invalid email address'
                setErrorEmail(error.emailError)
            }
            else{
                setErrorEmail('')
                error.emailError=''
                setErrorEmail(error.emailError)
            }
        }
        if (validator.isEmpty(password)){
            error.passwordError='Fill this field in form'
            setErrorPassword(error.passwordError)
        }
        else{
            if (!validator.isLength(password,{ min: 8, max: undefined })){
                error.passwordError='Your password must contain at least 8 characters'
                setErrorPassword(error.passwordError)
            }
            else{
                error.passwordError=''
                setErrorPassword(error.passwordError)
            }
        }
        
        if (validator.isEmpty(name)){
            error.nameError='Fill this field in form'
            setErrorName(error.nameError)
        }
        else{
            error.nameError=''
            setErrorName(error.nameError)
        }
        return (error.emailError=='' && error.nameError=='' && error.passwordError=='') ? true : false 
    }


    return {errorEmail,errorName,errorPassword,validate}
}

export default useValidator