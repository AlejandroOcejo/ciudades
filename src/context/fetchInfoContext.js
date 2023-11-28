import React, { createContext, useState } from 'react';

export const FetchInfoContext = createContext();

export const FetchInfoProvider = ({ children }) => {
    const [infoContext, setinfoContext] = useState([]);
    console.log(infoContext);
    return (
        <FetchInfoContext.Provider value={{ infoContext, setinfoContext }}>
            {children}
        </FetchInfoContext.Provider>
    );
};