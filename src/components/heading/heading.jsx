import styles from './heading.module.css';

const H1 = ({children, altColor = false}) => {
    return <h1 className={`${styles.h1} ${altColor ? styles.alt : ''}`}>{children}</h1>;
}

export {H1};