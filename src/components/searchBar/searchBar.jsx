import React, { useState, useContext } from 'react';
import { PostalCodeContext } from '../../context/PostalCodeContext.js';
import getCityInfo from '../../services/getCityInfo';
import ItemComponent from '../itemComponent/itemComponent';
import CityInfoDisplay from '../cityInfoDisplay/cityInfoDisplay';
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay';
import CityLocationDisplay from '../cityLocationDisplay/cityLocationDisplay';
import styles from "./searchBar.module.css"
import useLog from '../../hooks/useLog.js';


export default function SearchBar(props) {
    const { setPostalCode } = useContext(PostalCodeContext);

    let inlineStyle = {};

    const [inputValue, setInputValue] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (inputValue.length !== 5 || isNaN(Number(inputValue))) {
            console.log("Not a valid postal code");
        } else {
            setPostalCode(inputValue);
            console.log(inputValue);
        }

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

            {props.children}
            {/* <ItemComponent>
                <CityInfoDisplay />
            </ItemComponent>
            <ItemComponent>
                <CityWeatherDisplay />
            </ItemComponent>
            <ItemComponent>
                <CityLocationDisplay />
            </ItemComponent> */}
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