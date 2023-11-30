import React, { createContext, useEffect, useContext, useState } from 'react';
import { FetchInfoContext } from './fetchInfoContext';
import { PostalCodeContext } from './PostalCodeContext';
import usePostalCode from '../hooks/usePostalCode'


export const LogContext = createContext();

export const LogContextProvider = ({ children }) => {

    const [postalCodeLog, setPostalCodeLog] = useState([]);
    const { postalCode, setPostalCode } = usePostalCode();
    const { infoContext } = useContext(FetchInfoContext)

    useEffect(() => {
        if (!postalCodeLog.includes(postalCode) && postalCode !== "" && infoContext !== 'Error fetching city info') {
            setPostalCodeLog(postalCodeLog.concat(postalCode));
        }
    }, [infoContext]);

    return (
        <LogContext.Provider value={{ postalCodeLog }}>
            {children}
        </LogContext.Provider>
    );
};
