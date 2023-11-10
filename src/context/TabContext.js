import React, { createContext, useState } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [tab, setTab] = useState('search')

    const changeTab = (selectedTab) => {
        if (tab !== selectedTab) {
            setTab(selectedTab);
            console.log(selectedTab);
        }
    };

    return (
        <TabContext.Provider value={{ tab, changeTab }}>
            {children}
        </TabContext.Provider>
    );
};
