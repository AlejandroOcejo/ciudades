import React, { useState, useContext } from 'react';
import styles from './headerComponent.module.css';
import logo from '../../public/assets/miscalenea/logo.png';
import { TabContext } from '../../context/TabContext';

function HeaderComponent(props) {
    const { tab, changeTab } = useContext(TabContext);
    let inlineStyle = {};


    const onClickTabHandle = (selectedTab) => {
        changeTab(selectedTab);
        inlineStyle = { background: 'red' }
    };

    return (
        <div>
            <div className={styles.headerComponentDiv}>
                <img className={styles.headerLogo} src={logo} alt="1" />
                <div className={styles.buttonDiv}>
                    <div onClick={() => onClickTabHandle('search')} className={styles.button} >Buscar</div>
                    <div onClick={() => onClickTabHandle('log')} className={styles.button}>Historial</div>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default HeaderComponent;
