"use client"
import styles from './whygrammarly.module.scss'
import Nav from "../components/Nav"
import Footer from '../components/Footer'
import GrammarlyStartSection from '../components/grammarlyStartSection'

interface SectionType {
    text: string
    title : string
    content: 'img' | 'vid'
    src: string
    color: string
    bgColor: string
}

const section: SectionType= {
    text: 'This page explains where you can use our generative AI assistance and writing suggestions, how Grammarly’s product interacts with your text, and how we continuously improve our AI to make our prompts and suggestions more helpful.',
    title : 'Communication Assistance Made Simple',
    content: 'vid',
    src: 'https://static.grammarly.com/assets/files/27770e0799f6c6b528204e72ed1fbad6/ggo_four_features_video.mp4',
    color: 'white',
    bgColor: 'blue',
}

const WhyGrammarly: React.FC=()=>{
    return <div className={styles.why_gammarly}>
        <Nav />
        <GrammarlyStartSection title={section.title} text={section.text} content={section.content} src={section.src} bgColor={section.bgColor} color={section.color}/>
        <h3 className={styles.home__work__heading}>What is communication assistance?</h3>
        <p className={styles.home__work__info}>Grammarly leads the industry in building AI-enabled products to help people communicate effectively every day. With our AI assistant, GrammarlyGO, and advanced writing suggestions, you can accelerate your writing process, champion your voice, build connections, and spur your academic or professional growth. Communication assistance with Grammarly means a consistent experience of robust, real-time feedback on your writing across:</p>
        <Footer />
    </div>
}

export default WhyGrammarly