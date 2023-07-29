import Link from "next/link"
import styles from './home.module.scss'
import { HomeWorkList } from "./components/lists/HomeWork"
import HomeWorkSection from "./components/HomeWorkSection"

export default function Home() {
  return (
    <div className="w-100">
      <div className={styles.home__main}>
          <div className={styles.home__main__left}>
            <h1 className={styles.home__left__heading}>Great Writing,Simplified</h1>
            <p className={styles.home__left__note}>Compose bold, clear, mistake-free writing with Grammarly’s new AI-powered desktop Windows app.</p>
            <div>
              <button className={styles.home__left__register}><Link href='/register' style={{textDecoration:'none',color:'white'}}>Get Grammarly it's free</Link></button>
              <button className={styles.home__left__login}><Link href='/login' style={{textDecoration:'none',color:'black'}}>Log in</Link></button>
            </div>
            <p data-testid='policy' className={styles.home__left__policy}>By signing up, you agree to the <Link href='/'>Terms and Conditions</Link> and <Link href='/'>Privacy Policy</Link>. California residents, see our <Link href='/'>CA Privacy Notice.</Link></p>
          </div>
          <div className={styles.home__main__right}>
            <video className={styles.home__main__right__video} autoPlay loop muted>
              <source data-testid='vid-start' src="https://static.grammarly.com/assets/files/8a0dda99e354dd8552833ffaf47992a7/llama_video.mp4" type="video/mp4"/>
            </video>
          </div>
      </div>
      <div className={styles.home__work}>
          <h3 className={styles.home__work__heading}>Works Where You Do</h3>
          <p className={styles.home__work__info}>Get suggestions from Grammarly while you write in desktop applications and sites across the web—as you move between apps, social media, documents, messages, and emails.</p>
          <div className={styles.home__work__sections}>
            {HomeWorkList.map(section=><HomeWorkSection key={section.title} data={section}/>)}
          </div>
          <div className={styles.home__work__spelling}>
            <video className={styles.home__work__spelling__video} autoPlay loop muted>
              <source src="https://static.grammarly.com/assets/files/27770e0799f6c6b528204e72ed1fbad6/ggo_four_features_video.mp4" type="video/mp4"/>
            </video>
            <div>
              <h3 style={{fontWeight:'bold'}}>Beyond Grammar and Spelling</h3>
              <p style={{fontSize:'1.1rem',margin:'1rem 0rem'}}>From grammar and spelling to style and tone, Grammarly’s suggestions are comprehensive, helping you communicate effectively and as you intend.</p>
            </div>
          </div>
          <div className={styles.home__work__end}>
            <h2 className={styles.home__work__heading}>Brilliant Writing Awaits</h2>
            <p className={styles.home__work__info}>Discover the power of confident communication with Grammarly Free.</p>
            <p className={styles.home__work__btn}><Link href='/register' style={{textDecoration:'none',color:'white'}}>Get Grammarly it's free</Link></p>
          </div>
      </div>
    </div>
  )
}
