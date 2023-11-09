import React, { useState, createContext } from 'react';
import getCityInfo from '../../services/getCityInfo';
import ItemComponent from '../itemComponent/itemComponent';
import CityInfoDisplay from '../cityInfoDisplay/cityInfoDisplay';
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay';
import CityLocationDisplay from '../cityLocationDisplay/cityLocationDisplay';
import SearchLog from '../searchLog/searchLog';

export const postalCodeContext = createContext('');

export default function SearchBar(props) {
    const [postalCode, setPostalCode] = useState('');
    const [inputValue, setInputValue] = useState('');


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const cityInfo = await getCityInfo(inputValue);
            if (cityInfo !== "Error fetching city info") {
                setPostalCode(inputValue);
                return cityInfo
            } else {
                console.error("No city info available.");
            }
        } catch (error) {
            console.error("Error fetching city info");
        }
    };

    const value = postalCode

    return (
        <div>
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
            <postalCodeContext.Provider value={value}>
                <ItemComponent >
                    <CityInfoDisplay />
                </ItemComponent>
                <ItemComponent >
                    <CityWeatherDisplay />
                </ItemComponent>
                <ItemComponent >
                    <CityLocationDisplay />
                </ItemComponent>
                <SearchLog />
            </postalCodeContext.Provider>

        </div>
    );
}
