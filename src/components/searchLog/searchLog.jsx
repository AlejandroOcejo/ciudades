import React, { useContext } from 'react'
import usePostalCode from '../../hooks/usePostalCode'
import { Link, useNavigate } from 'react-router-dom';
import { LogContext, useLogContext } from '../../context/LogContext';

export default function SearchLog(props) {

    const { setPostalCode } = usePostalCode();
    const { postalCodeLog } = useLogContext();
    const navigate = useNavigate();

    const onClickPostalCodeUpdateHandle = (clickedPostalCode) => {
        setPostalCode(clickedPostalCode);
        navigate('/');
    }
    return (
        <div /* style={inlineStyle} */>
            <ul >
                {postalCodeLog.map((postalCodeLog) => (
                    <li key={postalCodeLog}>
                        <button onClick={() => onClickPostalCodeUpdateHandle(postalCodeLog)}>
                            {postalCodeLog}
                            <Link to="/" />
                        </button>
                    </li>
                ))}
            </ul>
            {props.children}

        </div>
    );
}

