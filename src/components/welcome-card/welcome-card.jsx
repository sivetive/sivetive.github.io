import Button from '../button/button';
import styles from './welcome-card.module.css';

const WelcomeCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <p className={styles.mainText}> Cześć, jestem <span>Bartosz</span></p>
                <p className={styles.mainText}>
                    Lubię <u>kodować, grać i pracować</u>
                </p>
                <div className={styles.buttons}>
                    <Button>Kontakt</Button>
                    <Button altType>Poznaj mnie</Button>
                </div>
                
            </div>
            <div className={styles.containerRight}>
                <img className={styles.portrait} src='src/assets/tahiti.png' />
            </div>
        </div>
    )
}

export default WelcomeCard;