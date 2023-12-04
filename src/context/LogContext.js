import React, { createContext, useEffect, useContext, useState } from 'react';
import { FetchInfoContext } from './fetchInfoContext';
import { PostalCodeContext } from './PostalCodeContext';
import usePostalCode from '../hooks/usePostalCode'


export const LogContext = createContext();

export const LogContextProvider = ({ children }) => {

    const [postalCodeLog, setPostalCodeFromLog] = useState([]);

    return (
        <LogContext.Provider value={{ postalCodeLog, setPostalCodeFromLog }}>
            {children}
        </LogContext.Provider>
    );
};
