import React, { createContext, useState } from 'react';

export const WeatherInfoContext = createContext();

export const WeatherInfoProvider = ({ children }) => {
    const [weatherInfoContext, setweatherInfoContext] = useState([]);
    console.log(weatherInfoContext);
    return (
        <WeatherInfoContext.Provider value={{ weatherInfoContext, setweatherInfoContext }}>
            {children}
        </WeatherInfoContext.Provider>
    );
};