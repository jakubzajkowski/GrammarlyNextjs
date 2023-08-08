import React,{useState} from 'react'
import styles from './settingsmodal.module.scss'
import { SettingListType } from './lists/setting'

interface SettingsModalProps {
    data: SettingListType<any>
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
    email: string
}

const SettingsModal:React.FC<SettingsModalProps> = ({data,setIsModal,email}) => {
  const [serverError,setServerError] =useState('')
  const [input0,setInput0]=useState('')
  const [input1,setInput1]=useState('')
  console.log(input0)

  const handleFunction = () =>{
    if (data.title=='Update Name'){
        data.editFunction(input0,input1,setServerError)
    }
    else if (data.title=='Update Password'){
        data.editFunction(input0,email,input1,setServerError)
    }
    else{
        data.editFunction(input1,email,input0,setServerError)
    }
  }
  return (
    <div className={styles.modal__container}>
      <div className={styles.modal}>
        <svg onClick={()=>setIsModal(state=>!state)} className={styles.modal__close} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        <h2 style={{fontWeight:'bold'}}>{data.title}</h2>
        <input type="text" className={styles.modal__input} onChange={(e)=>setInput0(e.target.value)} placeholder={data.placeholder0} />
        <input type="text" className={styles.modal__input} onChange={(e)=>setInput1(e.target.value)} placeholder={data.placeholder1} />
        <p style={{color:serverError=='Success' ? 'green' : 'red',fontSize:'0.8rem',margin:'0.5rem'}}>{serverError}</p>
        <button className={styles.modal__button} onClick={handleFunction}>Update</button>
      </div>
    </div>
  )
}
export default SettingsModal