"use client"
import styles from './foreducation.module.scss'
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
    text: 'Grammarly acts as your collaboration partner in every stage of the writing process, helping you brainstorm initial ideas, format citations accurately, and more so you submit your best work with integrity.',
    title : 'Grammarly for Students',
    content: 'img',
    src: 'https://static-web.grammarly.com/1e6ajr2k4140/7GJrEJ6CE12M3x62uDwTMh/eb2631b537ba9248aaf7ac051104fb68/Image.png?w=1080&fm=webp',
    color: 'white',
    bgColor: 'rgb(8, 56, 9)',
}

const ForEducation: React.FC=()=>{
    return <div className={styles.for_education}>
        <Nav />
        <GrammarlyStartSection title={section.title} text={section.text} content={section.content} src={section.src} bgColor={section.bgColor} color={section.color}/>
        <h3 className={styles.for_education__heading}>Everything You Need to Ace Your Assignments</h3>
        <p className={styles.for_education__info}>Navigate new challenges with a generative AI co-creator that gets you going when you’re at a loss.</p>
        <Footer />
    </div>
}

export default ForEducation