import WelcomeCard from "../welcome-card/welcome-card";
import styles from './landing-page.module.css';

const LandingPage = () => {
    return(
        <div className={styles.container}>
            <WelcomeCard />
        </div>
    )
}

export default LandingPage;