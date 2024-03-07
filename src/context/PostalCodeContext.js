import React, { createContext, useState, useContext } from 'react';

const PostalCodeContext = createContext();

export const PostalCodeProvider = ({ children }) => {
    const [postalCode, setPostalCode] = useState('');

    return (
        <PostalCodeContext.Provider value={{ postalCode, setPostalCode }}>
            {children}
        </PostalCodeContext.Provider>
    );
};

export const usePostalCodeContext = () => {
    const context = useContext(PostalCodeContext);
    return context;
}