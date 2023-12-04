import React, { useState, useEffect, useContext } from 'react'
import usePostalCode from '../../hooks/usePostalCode'
import styles from './searchLog.module.css'
import getCityInfo from '../../services/getCityInfo';
import { FetchInfoContext } from '../../context/fetchInfoContext';
import { Link, useNavigate } from 'react-router-dom';
import { LogContext } from '../../context/LogContext';
import useLog from '../../hooks/useLog';

export default function SearchLog(props) {

    const { postalCode, setPostalCode } = usePostalCode();
    const { postalCodeLog } = useContext(LogContext)
    useLog()
    /* const { tab, changeTab } = useContext(TabContext); */
    /* const [cityLog, setcityLog] = useState([]) */
    /* const { infoContext } = useContext(FetchInfoContext)*/
    const navigate = useNavigate();

    const onClickPostalCodeUpdateHandle = (clickedPostalCode) => {
        setPostalCode(clickedPostalCode);
        navigate('/search');
    }




    return (
        <div /* style={inlineStyle} */>
            <ul >
                {postalCodeLog.map((postalCodeLog) => (
                    <li key={postalCodeLog}>
                        <button onClick={() => onClickPostalCodeUpdateHandle(postalCodeLog)}>
                            {postalCodeLog}
                            <Link to="/search" />
                        </button>
                    </li>
                ))}
            </ul>
            {props.children}
        </div>

    );
}
