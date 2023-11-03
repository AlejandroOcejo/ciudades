import React from 'react';
import styles from './headerComponent.module.css';
import logo from '../../public/assets/miscalenea/logo.png';

function HeaderComponent() {
    return (
        <div className={styles.headerComponentDiv}>
            <img className={styles.headerLogo} src={logo} alt="1" />
            <div className={styles.buttonDiv}>
                <div className={styles.button}>Boton1</div>
                <div className={styles.button}>Boton2</div>
            </div>
        </div>
    );
}

export default HeaderComponent;
