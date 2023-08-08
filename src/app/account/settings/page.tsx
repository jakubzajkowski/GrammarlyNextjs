"use client"
import React, { useState } from 'react'
import useAuth from '@/app/hooks/useAuth'
import usePolling from '@/app/hooks/usePolling'
import Loading from '@/app/components/Loading'
import Sidebar from '../components/Sidebar'
import styles from './settings.module.scss'
import SettingsModal from './components/SettingsModal'
import { SettingsList } from './components/lists/setting'

const Settings: React.FC = () => {
    const {isLogged,error,isLoading} = useAuth()
    const {data,errorPoll} = usePolling()
    const [modal,setModal] = useState('')
    const [isModal,setIsModal] = useState(false)

    if (error) {
        return <div>{error}</div>
    }
    else if (isLoading || !data) {
        return <Loading />
    }
    if (isLogged && data){
        return <div className={styles.settings}>
            <Sidebar email={data?.email} />
            {isModal && (SettingsList.filter(content=>content.title==modal).map(modal=><SettingsModal email={data.email} setIsModal={setIsModal} data={modal}/>))}
            <div className={styles.settings__profile}>
                <h2 className={styles.settings__profile__title}>Account Settings</h2>
                <hr />
                <h5>Profile</h5>
                <div className={styles.settings__profile__section}>
                    <p className={styles.settings__profile__section__title}>Name</p>
                    <p>{data.name} <span onClick={()=>{setModal('Update Name');setIsModal(true)}} className={styles.settings__profile__section__btn}>Update</span></p>
                </div>
                <div className={styles.settings__profile__section}>
                    <p className={styles.settings__profile__section__title}>Email</p>
                    <p>{data.email} <span onClick={()=>{setModal('Update Email');setIsModal(true)}} className={styles.settings__profile__section__btn}>Update</span></p>
                </div>
                <div className={styles.settings__profile__section}>
                    <p className={styles.settings__profile__section__title}>Password</p>
                    <p>{data.password} <span onClick={()=>{setModal('Update Password');setIsModal(true)}} className={styles.settings__profile__section__btn}>Update</span></p>
                </div>
                <hr />
                <div className={styles.settings__profile__section}>
                    <p className={styles.settings__profile__section__delete__btn}>Delete Account</p>
                    <p style={{fontSize:'0.8rem'}}>This account will no longer be available, and all your saved data will be permanently deleted.</p>
                </div>
            </div>
        </div>
    }
}

export default Settings