import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Bartosz Burzec</h1>
            <div className={styles.middleHeader}>
                <p>O mnie</p>
                <p>CV</p>
                <p>Usługi</p>
                <p>Projekty</p>
            </div>
            <p className={styles.contact}>Kontakt</p>
        </header>
    )
}

export default Header;