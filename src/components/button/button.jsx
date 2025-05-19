import styles from './button.module.css';

const Button = ({onClick, children, altType = false}) => {
    return (
        <button
            className={!altType ? styles.button : styles.buttonAlt} 
            onClick={onClick}>{children}</button>
    );
}

export default Button;