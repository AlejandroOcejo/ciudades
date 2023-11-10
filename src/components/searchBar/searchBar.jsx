import React, { useState, useContext } from 'react';
import { PostalCodeContext } from '../../context/PostalCodeContext.js';
import getCityInfo from '../../services/getCityInfo';
import ItemComponent from '../itemComponent/itemComponent';
import CityInfoDisplay from '../cityInfoDisplay/cityInfoDisplay';
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay';
import CityLocationDisplay from '../cityLocationDisplay/cityLocationDisplay';
import { TabContext } from '../../context/TabContext.js';
import styles from "./searchBar.module.css"


export default function SearchBar(props) {
    const { setPostalCode } = useContext(PostalCodeContext);
    const { tab } = useContext(TabContext);

    let inlineStyle = {};
    if (tab === 'log') {
        inlineStyle = { display: 'none' }
    }

    const [inputValue, setInputValue] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const cityInfo = await getCityInfo(inputValue);
            if (cityInfo !== 'Error fetching city info') {
                setPostalCode(inputValue);
                return cityInfo;
            } else {
                console.error('No city info available.');
            }
        } catch (error) {
            console.error('Error fetching city info');
        }
    };

    return (
        <div style={inlineStyle}>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Codigo Postal:
                    <input
                        type="number"
                        name="postalCode"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {props.children}
            <ItemComponent>
                <CityInfoDisplay />
            </ItemComponent>
            <ItemComponent>
                <CityWeatherDisplay />
            </ItemComponent>
            <ItemComponent>
                <CityLocationDisplay />
            </ItemComponent>
        </div>
    );
}
