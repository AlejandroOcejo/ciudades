import React, { useState, useEffect, useContext } from 'react'
import usePostalCode from '../../hooks/usePostalCode'
import { TabContext } from '../../context/TabContext';
import styles from './searchLog.module.css'

export default function SearchLog() {
    const [postalCodeLog, setPostalCodeLog] = useState([]);
    const { postalCode, setPostalCode } = usePostalCode();
    const { tab, changeTab } = useContext(TabContext);

    const onClickPostalCodeUpdateHandle = (clickedPostalCode) => {
        setPostalCode(clickedPostalCode);
        changeTab('search')
    }

    let inlineStyle = {};

    if (tab === 'search') {
        inlineStyle = { display: 'none' }
    }

    useEffect(() => {
        if (!postalCodeLog.includes(postalCode) && postalCode !== "") {
            setPostalCodeLog(postalCodeLog.concat(postalCode));
        }
    }, [postalCode, postalCodeLog]);

    return (
        <div style={inlineStyle}>
            <ul >
                {postalCodeLog.map((postalCodeLog) => (
                    <li key={postalCodeLog}>
                        <button onClick={() => onClickPostalCodeUpdateHandle(postalCodeLog)}>
                            {postalCodeLog}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
