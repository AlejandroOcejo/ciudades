import React, {useContext } from 'react';
import styles from "./cityLocationDisplay.module.css"
import mapIcon from "../../public/assets/miscalenea/mapicon.png"
import { FetchInfoContext } from '../../context/fetchInfoContext';



export default function CityLocationDisplay() {
    
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