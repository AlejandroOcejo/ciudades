import React, { useState, useEffect } from 'react'
import usePostalCode from '../../hooks/usePostalCode'


export default function SearchLog() {
    const [postalCodeLog, setPostalCodeLog] = useState([]);
    const { postalCode, setPostalCode } = usePostalCode();

    const onClickPostalCodeUpdateHandle = (clickedPostalCode) => {
        setPostalCode(clickedPostalCode);
    }

    useEffect(() => {
        if (!postalCodeLog.includes(postalCode) && postalCode !== "") {
            setPostalCodeLog(postalCodeLog.concat(postalCode));
        }
    }, [postalCode, postalCodeLog]);

    return (
        <div>
            <h2>Postal Code Log:</h2>
            <ul>
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
