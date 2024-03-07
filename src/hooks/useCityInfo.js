import React, { useEffect, useContext, useMemo } from 'react'
import useFetch from './useFetch'
import usePostalCode from './usePostalCode';
import { useFetchInfoContext } from '../context/fetchInfoContext';
import { useLogContext } from "../context/LogContext";


export default function useCityInfo() {
    const { postalCode } = usePostalCode();
    const fetchData = useFetch();
    const { infoContext, setinfoContext } = useFetchInfoContext();
    const { postalCodeLog, setPostalCodeFromLog } = useLogContext()

    useEffect(() => {
        if (postalCode) {
            fetchData.call(`http://api.zippopotam.us/es/${postalCode}`);
        }
    }, [postalCode]);

    useEffect(() => {
        console.log("useEffect", fetchData.data);
        if (fetchData.data) {
            const { places = [] } = fetchData.data;
            const newInfo = places.map((result) => ({
                "place_name": result["place name"],
                "state_abbreviation": result["state abbreviation"],
                "longitude": result.longitude,
                "state": result.state,
                "latitude": result.latitude
            }));
            setinfoContext(newInfo);
            if (!postalCodeLog.includes(postalCode)) {
                setPostalCodeFromLog(postalCodeLog.concat(postalCode))
            }
            console.log(newInfo);
        }
    }, [fetchData.data]);


    //const infoContext  = useMemo();

    return infoContext;
}