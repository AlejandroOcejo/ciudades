import React, { createContext, useState } from 'react';

export const PostalCodeContext = createContext();

export const PostalCodeProvider = ({ children }) => {
    const [postalCode, setPostalCode] = useState('');

    return (
        <PostalCodeContext.Provider value={{ postalCode, setPostalCode }}>
            {children}
        </PostalCodeContext.Provider>
    );
};
