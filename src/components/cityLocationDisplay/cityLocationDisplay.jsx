import React, { useState, useEffect } from 'react';
import getCityInfo from "../../services/getCityInfo";
import styles from "./cityLocationDisplay.module.css"


export default function CityLocationDisplay({ postalCode }) {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getCityInfo(postalCode).then(info => setInfo(info));
    }, [postalCode]);
    return (
        <div>
            {info.map(({ latitude, longitude }) => (
                <div>
                    <p><b>Longitud:</b>{longitude} </p>
                    <p><b>Latitud:</b>{latitude} </p>
                </div>
            ))}
        </div>
    );
}