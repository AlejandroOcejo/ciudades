import React, { useEffect, useMemo, useContext } from 'react'
import useFetch from './useFetch'
import usePostalCode from './usePostalCode';
import { FetchInfoContext } from '../context/fetchInfoContext';
import { WeatherInfoContext } from '../context/WeatherInfoContext';
import { PostalCodeContext } from '../context/PostalCodeContext';

export default function useWeatherInfo() {
    const fetchData = useFetch();
    const { weatherInfoContext, setweatherInfoContext } = useContext(WeatherInfoContext);
    const { infoContext, setinfoContext } = useContext(FetchInfoContext);
    const { postalCode } = useContext(PostalCodeContext)
    console.log(infoContext);

    useEffect(() => {
        if (infoContext.length > 0) {
            fetchData.call(`https://api.open-meteo.com/v1/forecast?latitude=${infoContext[0]["latitude"]}&longitude=${infoContext[0]["longitude"]}&hourly=temperature`);
        }
    }, [infoContext]);


    useEffect(() => {
        console.log("useEffect", fetchData.data);
        if (fetchData.data) {
            let weatherInfo = fetchData.data
            const { hourly } = weatherInfo;
            const { time, temperature } = hourly;
            if (hourly) {
                const weatherInfo = time.map((timestamp, index) => ({
                    time: timestamp,
                    temperature: temperature[index],
                }));
                console.log(weatherInfo);
                setweatherInfoContext(weatherInfo);
            }
        }
    }, [fetchData.data]);
    


    //const infoContext  = useMemo();


}
