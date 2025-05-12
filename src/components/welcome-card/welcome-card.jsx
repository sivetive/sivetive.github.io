import styles from './welcome-card.module.css';

const WelcomeCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <p className={styles.upperText}>👋 Cześć, jestem Bartek,</p>
                <p className={styles.mainText}>Web Developer</p>
                <p className={styles.subText}>Tarnów, Polska</p>
            </div>
            <div className={styles.containerRight}>
                <img style={{height: "500px"}} src='src/assets/tahiti.png' />
            </div>
        </div>
    )
}

export default WelcomeCard;