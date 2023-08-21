"use client"
import styles from './forwork.module.scss'
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

const Imgs:  string[]=[
    'https://static-web.grammarly.com/1e6ajr2k4140/5BIK9ZnsBLWv9xHhbfS17B/b6e31e977ff3e5efafb4f39ae480573a/Title_Gmail__Type_Google.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/4PxqUu8Lqc9QyWEocaGhjo/5178d202757133e93f99354cfe8eca2c/Title_Outlook__Type_MS_Office_Suite.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/7DA3sXcFmdTm5WMScPm1nD/988e0b862140dda85040935bf658ba2c/Title_Slack__Type_Other.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/6aLV63LtMKC2wVCWAsVh55/f0248e777e47ccbc8c49ca923c11b4ee/Title_Google_Doc__Type_Google.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/2mYCUTyCNMKiSu3yx1H2sE/ad122a7cd990c34b04630312c8a96ec9/Title_Word__Type_MS_Office_Suite.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/58mYBiHVXLNT2ijYkpRe9x/0e7b263686d640780f38595fd7836f28/Title_Excel__Type_MS_Office_Suite.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/7eLJH8pUzhCf1fQLrbUefH/216ce4916fefd5a8a467aa26f8b92b45/gmail__2_.svg',
    'https://static-web.grammarly.com/1e6ajr2k4140/5l7SIuV0OxL3rSbPABsVE/8fa1c287980d1023450b08df8a157be7/Title_LinkedIn__Type_Social_Media.svg'
]

const section: SectionType= {
    text: 'Turn writing that works into writing that gets results.',
    title : 'Do Your Best Work',
    content: 'img',
    src: 'https://static-web.grammarly.com/1e6ajr2k4140/3WNfgla8JBkzqJQLVLj7fn/8de0a68e70c5c0cea14959247b0043d9/Group_898.png?w=1080&fm=webp',
    color: 'black',
    bgColor: 'white',
}

const ForWork: React.FC=()=>{
    return <div className={styles.forwork}>
        <Nav />
        <GrammarlyStartSection title={section.title} text={section.text} content={section.content} src={section.src} bgColor={section.bgColor} color={section.color}/>
        <h3 className={styles.forwork__work__heading}>Grammarly Works Where You Do</h3>
        <p className={styles.forwork__work__info}>Put your best foot forward in every message and document you write.</p>
        <div className={styles.forwork__icon}>
            {Imgs.map(img=><img src={img} alt='img icon' loading='lazy'/>)}
        </div>
        <Footer />
    </div>
}

export default ForWork