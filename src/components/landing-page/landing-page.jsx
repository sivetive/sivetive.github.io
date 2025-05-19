import AboutCard from "../about-card/about-card";
import WelcomeCard from "../welcome-card/welcome-card";
import styles from './landing-page.module.css';

const LandingPage = () => {
    return(
        <div className={styles.container}>
            <WelcomeCard />
            <AboutCard />
        </div>
    )
}

export default LandingPage;