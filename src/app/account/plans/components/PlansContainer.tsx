import React from 'react'
import { PlansListType } from '../list/PlansList'
import styles from './planscontainer.module.scss'

interface PlansContainerProps extends PlansListType {
    planSelected: string
}


const PlansContainer:React.FC<PlansContainerProps> = ({header,planName,plan,desc,btnName,planFunctions,planSelected}) => {
  return (
    <div className={styles.plan}>
        <p className={styles.plan__header}>{header}</p>
        <h3 className={styles.plan__name}>{planName}</h3>
        <p>{desc}</p>
        <button className={planSelected==plan ? styles.plan__btn :  styles.plan__btn__select__plan}>{btnName}</button>
        <div>
            {planFunctions.map(func=><p className={styles.plan__functions}><svg className={styles.plan__icons} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>{func}</p>)}
        </div>
    </div>
  )
}

export default PlansContainer