import React, { useContext } from 'react';
import styles from './headerComponent.module.css';
import logo from '../../public/assets/miscalenea/logo.png';
import { Link } from 'react-router-dom';

function HeaderComponent(props) {

    /*     const onClickTabHandle = (selectedTab) => {
            changeTab(selectedTab);
        }; */

    return (
        <div>
            <div className={styles.headerComponentDiv}>
                <img className={styles.headerLogo} src={logo} alt="1" />
                <div className={styles.buttonDiv}>
                    <div className={styles.button}>
                        <Link to="/search">
                            Buscar
                        </Link>
                    </div>
                    <div className={styles.button}>
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
