"use client"
import styles from './compareplans.module.scss'
import Nav from "../components/Nav"
import Footer from '../components/Footer'
import GrammarlyStartSection from '../components/grammarlyStartSection'
import { PlansList } from '../account/plans/list/PlansList'
import PlansContainer from '../account/plans/components/PlansContainer'

interface SectionType {
    text: string
    title : string
    content: 'img' | 'vid'
    src: string
    color: string
    bgColor: string
}

const section: SectionType= {
    text: 'Go beyond grammar. Choose a plan to ensure everything you write is clear, engaging, and polished.',
    title : 'Elevate Your Writing',
    content: 'img',
    src: 'https://static-web.grammarly.com/1e6ajr2k4140/1FvjEQYv147CBdgE2pw1zL/857ace085e67cd1df49c7cc04b17f31f/Group_626009.png?w=1080&fm=webp',
    color: 'black',
    bgColor: 'white',
}

const ComparePlans: React.FC=()=>{
    return <div className={styles.comapre_plans}>
        <Nav />
        <GrammarlyStartSection title={section.title} text={section.text} content={section.content} src={section.src} bgColor={section.bgColor} color={section.color}/>
        <div className={styles.comapre_plans__container}>
            {PlansList.map(plan=><PlansContainer plan={plan.plan} planSelected='none' header={plan.header} planName={plan.planName} desc={plan.desc} btnName={plan.btnName} planFunctions={plan.planFunctions}/>)}
        </div>
        <Footer />
    </div>
}

export default ComparePlans