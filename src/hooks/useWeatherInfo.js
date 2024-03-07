import React, { useEffect, useContext, useMemo } from 'react'
import useFetch from './useFetch'
import { useFetchInfoContext } from '../context/fetchInfoContext';
import { useWeatherInfoContext } from '../context/WeatherInfoContext';

export default function useWeatherInfo() {
    const fetchData = useFetch();
    const { setweatherInfoContext, WeatherInfoContext } = useWeatherInfoContext()
    const { infoContext } = useFetchInfoContext();

    useEffect(() => {
        if (infoContext && infoContext.length > 0) {
            fetchData.call(`https://api.open-meteo.com/v1/forecast?latitude=${infoContext[0]["latitude"]}&longitude=${infoContext[0]["longitude"]}&hourly=temperature`);
        }
    }, [infoContext]);


    useEffect(() => {
        if (fetchData.data) {
            let weatherInfo = fetchData.data
            const { hourly } = weatherInfo;
            const { time, temperature } = hourly;
            weatherInfo = time.map((timestamp, index) => ({
                time: timestamp,
                temperature: temperature[index],
            }));
            console.log(weatherInfo);
            setweatherInfoContext(weatherInfo);
        }
    }, [fetchData.data]);

    //const infoContext  = useMemo();
    return WeatherInfoContext
}
