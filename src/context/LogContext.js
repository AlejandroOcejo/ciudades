import React, { createContext, useEffect, useContext, useState } from 'react';
import { PostalCodeContext } from './PostalCodeContext';
import usePostalCode from '../hooks/usePostalCode'


const LogContext = createContext();

export const LogContextProvider = ({ children }) => {

    const [postalCodeLog, setPostalCodeFromLog] = useState([]);

    return (
        <LogContext.Provider value={{ postalCodeLog, setPostalCodeFromLog }}>
            {children}
        </LogContext.Provider>
    );
};

export const useLogContext = () => {
    const context = useContext(LogContext);
    return context;
}
