import React, { useState, useContext } from 'react';
import { PostalCodeContext } from '../../context/PostalCodeContext.js';
import getCityInfo from '../../services/getCityInfo';
import ItemComponent from '../itemComponent/itemComponent';
import CityInfoDisplay from '../cityInfoDisplay/cityInfoDisplay';
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay';
import CityLocationDisplay from '../cityLocationDisplay/cityLocationDisplay';
import styles from "./searchBar.module.css"
import useLog from '../../hooks/useLog.js';
import ErrorComponent from '../errorComponent/errorComponent.jsx';
import useCityInfo from '../../hooks/useCityInfo.js'
import useWeatherInfo from '../../hooks/useWeatherInfo.js';

export default function SearchBar(props) {
    const { setPostalCode } = useContext(PostalCodeContext);
    const [active, setActive] = useState(false);
    let inlineStyle = {};
    useCityInfo()
    useWeatherInfo()
    
    const [inputValue, setInputValue] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (inputValue.length !== 5 || isNaN(Number(inputValue))) {
            setActive(true)

        } else {
            setPostalCode(inputValue);
            setActive(false)
            console.log(inputValue);
        }


    };
    const errorStyle = {
        display: active ? 'none' : 'block',
    };



    useLog()
    return (
        <div style={inlineStyle}>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Codigo Postal:
                    <input
                        type="text"
                        name="postalCode"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <ErrorComponent style={errorStyle} />
            {props.children}
        </div>
    );
}


//try {
/* const cityInfo = await getCityInfo(inputValue);
if (cityInfo !== 'Error fetching city info') { */
// setPostalCode(inputValue);
//console.log(inputValue);
//return cityInfo;
/* } else {
    console.error('No city info available');
} */
/*  } catch (error) {
     console.error('Error fetching city info');
 } */