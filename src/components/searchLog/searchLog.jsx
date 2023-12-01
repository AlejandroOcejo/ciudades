import React, { useState, useEffect, useContext } from 'react'
import usePostalCode from '../../hooks/usePostalCode'
import styles from './searchLog.module.css'
import getCityInfo from '../../services/getCityInfo';
import { FetchInfoContext } from '../../context/fetchInfoContext';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchLog(props) {
    const [postalCodeLog, setPostalCodeLog] = useState([]);
    const { postalCode, setPostalCode } = usePostalCode();
    /* const { tab, changeTab } = useContext(TabContext); */
    /* const [cityLog, setcityLog] = useState([]) */
    const { infoContext } = useContext(FetchInfoContext)
    const navigate = useNavigate();

    const onClickPostalCodeUpdateHandle = (clickedPostalCode) => {
        setPostalCode(clickedPostalCode);
        navigate('/search');
    }

   /*  useEffect(() => {
        if (!postalCodeLog.includes(postalCode) && postalCode !== "" && infoContext !== 'Error fetching city info') {
            setPostalCodeLog(postalCodeLog.concat(postalCode));
        }
    }, [infoContext]); */


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
