import styles from './welcome-card.module.css';

const WelcomeCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <p className={styles.upperText}>👋 Cześć, nazywam się</p>
                <p className={styles.mainText}>Bartosz Burzec</p>
                <p className={styles.subText}>Lubię kodować, grać i pracować (za pieniądze! 💸)</p>
            </div>
            <div className={styles.containerRight}>
                <div className={styles.portraitBackground}></div>
                <img className={styles.portrait} src='src/assets/tahiti.png' />
                {/* <img style={{height: "500px"}} src='src/assets/tahiti.png' />
                <div className={styles.portraitBackground}></div> */}
            </div>
        </div>
    )
}

export default WelcomeCard;