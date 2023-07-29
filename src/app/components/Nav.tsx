'use client'
import { useState,useEffect } from 'react'
import styles from './nav.module.scss'
import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';

export default function Nav() {
    const [isMobileBar,setIsMobileBar]= useState(false)
    useEffect(() => {
        if (isMobileBar) {
          document.body.style.overflow = 'hidden'
        }
        else{
          document.body.style.overflow='visible'
        }
      }, [isMobileBar])

    return <div className={styles.navbar}>
        <div className={styles.nav}>
            <div className={styles.nav__left}>
                <h5><svg data-testid="logo" className={styles.nav__logo} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"/></svg><Link href="/" className={styles.link__style__black}>Grammarly</Link></h5>
                <p className={styles.nav__option}><Link className={styles.link__style__black} href="/">Why Grammarly</Link></p>    
                <p className={styles.nav__option}><Link className={styles.link__style__black} href="/">For Work</Link></p>
                <p className={styles.nav__option}><Link className={styles.link__style__black} href="/">For Education</Link></p>
                <p className={styles.nav__option}><Link className={styles.link__style__black} href="/">Compare Plans</Link></p>
            </div>
            <div className={styles.nav__right}>
                <p className={styles.nav__signup}><Link className={styles.link__style__black} href="/login">Log in</Link></p>
                <p className={styles.nav__register}><Link className={styles.link__style__white} href="/register">Get Grammarly it's free</Link></p>
                <svg onClick={()=>setIsMobileBar(true)} className={styles.nav__mobile__bars} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>
        </div>
        <AnimatePresence>
        {isMobileBar && (
            <motion.div className={styles.nav__mobile__container} initial={{ left: '0%' }} animate={{ left: ['100%','0%'] }} exit={{ left: ['0%','100%'] }}>
                <h5 className={styles.nav__mobile__logo__container}><svg className={styles.nav__mobile__logo} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"/></svg>Grammarly</h5>
                <svg onClick={()=>setIsMobileBar(false)} className={styles.nav__mobile__close} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                <div className={styles.nav__mobile__options}>
                    <p className={styles.nav__mobile__option}><Link className={styles.link__style__black} href="/">Why Grammarly</Link></p>    
                    <p className={styles.nav__mobile__option}><Link className={styles.link__style__black} href="/">For Work</Link></p>
                    <p className={styles.nav__mobile__option}><Link className={styles.link__style__black} href="/">For Education</Link></p>
                    <p className={styles.nav__mobile__option}><Link className={styles.link__style__black} href="/">Compare Plans</Link></p>
                    <p className={styles.nav__mobile__register}><Link className={styles.link__style__white} href="/">Get Grammarly</Link></p>
                    <p className={styles.nav__mobile__login}><Link className={styles.link__style__color} href="/">Log in</Link></p>
                </div>
            </motion.div>
        )}
  </AnimatePresence>
    </div>
  }