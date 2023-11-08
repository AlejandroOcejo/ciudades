import React, { useState, useEffect } from 'react';
import getCityInfo from "../../services/getCityInfo";
import styles from "./cityLocationDisplay.module.css"
import mapIcon from "../../public/assets/miscalenea/mapicon.png"


export default function CityLocationDisplay({ postalCode }) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        if (getCityInfo(postalCode) === "Error fetching city info") {

        } else {
            getCityInfo(postalCode).then(info => setInfo(info));
        }

    }, [postalCode]);
    return (
        <div>
            {info.map(({ latitude, longitude }) => (
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