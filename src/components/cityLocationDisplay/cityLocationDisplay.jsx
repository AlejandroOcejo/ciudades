import React, { useState, useEffect, useContext } from 'react';
import usePostalCode from '../../hooks/usePostalCode';
import getCityInfo from "../../services/getCityInfo";
import styles from "./cityLocationDisplay.module.css"
import mapIcon from "../../public/assets/miscalenea/mapicon.png"
import useFetch from '../../hooks/useFetch';
import { FetchInfoContext } from '../../context/fetchInfoContext';



export default function CityLocationDisplay() {

    const { postalCode } = usePostalCode();
    useFetch(postalCode)
    const { infoContext } = useContext(FetchInfoContext);

    return (
        <div>
            {Array.isArray(infoContext) && infoContext.map(({ latitude, longitude }) => (
                <div className={styles.infoDiv}>
                    <div>
                        <p><b>Longitud:</b>{longitude} </p>
                        <p><b>Latitud:</b>{latitude} </p>
                    </div>
                    <div>
                        <a href={`https://maps.google.com/?q=${latitude},${longitude}`} target="_blank" rel="noreferrer">
                            <img src={mapIcon} className={styles.mapDiv} alt="Map Icon" /> </a>
                    </div>
                </div>
            ))}
        </div>
    );
}