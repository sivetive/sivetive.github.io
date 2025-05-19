import { H1 } from '../heading/heading';
import styles from './about-card.module.css';

const AboutCard = () => {
    return(
        <section className={styles.container}>
            <H1 altColor>Trochę o mnie</H1>
        </section>
    )
}

export default AboutCard;