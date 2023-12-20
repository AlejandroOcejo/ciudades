import React, { useEffect, useMemo, useContext } from 'react'
import useFetch from './useFetch'
import usePostalCode from './usePostalCode';
import { FetchInfoContext } from '../context/fetchInfoContext';

export default function useCityInfo() {
    const { postalCode } = usePostalCode();
    const fetchData = useFetch();
    const { infoContext, setinfoContext } = useContext(FetchInfoContext);


    useEffect(() => {
        if (postalCode) {
            fetchData.call(`http://api.zippopotam.us/es/${postalCode}`);
        }
    }, [postalCode]);

    useEffect(() => {
        console.log("useEffect", fetchData.data);
        if (fetchData.data) {
            const newInfo = fetchData.data.places.map((result) => ({
                "place_name": result["place name"],
                "state_abbreviation": result["state abbreviation"],
                "longitude": result.longitude,
                "state": result.state,
                "latitude": result.latitude
            }));
            setinfoContext(newInfo);
            console.log(newInfo);
        } else {
            setinfoContext([]);
        }
    }, [fetchData.data]);


    //const infoContext  = useMemo();

    return infoContext;
}