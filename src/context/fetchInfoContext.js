import React, { createContext, useContext, useState } from 'react';

const FetchInfoContext = createContext();

export const FetchInfoProvider = ({ children }) => {
    const [infoContext, setinfoContext] = useState([]);
    console.log(infoContext);
    return (
        <FetchInfoContext.Provider value={{ infoContext, setinfoContext }}>
            {children}
        </FetchInfoContext.Provider>
    );
};

export const useFetchInfoContext = () => {
    const context = useContext(FetchInfoContext);
    return context;
}

/* export default useFetchInfoContext */