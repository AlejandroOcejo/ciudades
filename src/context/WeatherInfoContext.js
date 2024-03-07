import React, { createContext, useContext, useState } from 'react';

const WeatherInfoContext = createContext();

export const WeatherInfoProvider = ({ children }) => {
    const [weatherInfoContext, setweatherInfoContext] = useState([]);
    console.log(weatherInfoContext);
    return (
        <WeatherInfoContext.Provider value={{ weatherInfoContext, setweatherInfoContext }}>
            {children}
        </WeatherInfoContext.Provider>
    );
};

export const useWeatherInfoContext = () => {
    const context = useContext(WeatherInfoContext);
    return context;
}