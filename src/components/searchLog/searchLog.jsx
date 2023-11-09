import React, { useState, useEffect } from 'react'
import usePostalCode from '../../hooks/usePostalCode'

export default function SearchLog() {

    const [postalCodeLog, setPostalCodeLog] = useState([]);
    const postalCode = usePostalCode();

    useEffect(() => {
        if (!postalCodeLog.includes(postalCode) && postalCode !== "") {
            setPostalCodeLog(postalCodeLog.concat(postalCode));
        }
    }, [postalCode, postalCodeLog]);


    return (
        <div>
            <h2>Postal Code Log:</h2>
            <ul>
                {postalCodeLog.map((postalCode) => (
                    <li>{postalCode}</li>
                ))}
            </ul>
        </div>
    );
}
