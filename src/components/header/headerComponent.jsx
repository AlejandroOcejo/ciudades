import React, { useContext } from 'react';
import styles from './headerComponent.module.css';
import logo from '../../public/assets/miscalenea/logo.png';
import { Link, useLocation } from 'react-router-dom';

function HeaderComponent(props) {

    const location = useLocation();
    const isSearchPage = location.pathname.endsWith("/");


    return (
        <div>
            <div className={styles.headerComponentDiv}>
                <img className={styles.headerLogo} src={logo} alt="1" />
                <div className={styles.buttonDiv}>
                    <div className={isSearchPage ? styles.activeButton : styles.button}>
                        <Link to="/">
                            Buscar
                        </Link>
                    </div>
                    <div className={!isSearchPage ? styles.activeButton : styles.button}>
                        <Link to="/log">
                            Historial
                        </Link>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default HeaderComponent;
