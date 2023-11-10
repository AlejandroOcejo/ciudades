import React, { Children } from 'react';
import styles from './headerComponent.module.css';
import logo from '../../public/assets/miscalenea/logo.png';

function HeaderComponent(props) {
    return (
        <div>
            <div className={styles.headerComponentDiv}>
                <img className={styles.headerLogo} src={logo} alt="1" />
                <div className={styles.buttonDiv}>
                    <div className={styles.button}>Buscar</div>
                    <div className={styles.button}>Historial</div>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default HeaderComponent;
