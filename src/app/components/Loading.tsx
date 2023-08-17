import styles from './loading.module.scss'

const Loading: React.FC = ()=>{
    return <div className={styles.loading} data-testid='loader'>
        <div className={styles.loading__dot__container}>
            <div className={styles.dotone}></div>
            <div className={styles.dottwo}></div>
            <div className={styles.dotthree}></div>
        </div>
    </div>
} 

export default Loading