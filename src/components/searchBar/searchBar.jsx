import React, { useState } from 'react';
import getCityInfo from '../../services/getCityInfo';
import ItemComponent from '../itemComponent/itemComponent';
import CityInfoDisplay from '../cityInfoDisplay/cityInfoDisplay';
import CityWeatherDisplay from '../cityWeatherDisplay/cityWeatherDisplay';
import CityLocationDisplay from '../cityLocationDisplay/cityLocationDisplay';

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
            <ItemComponent postalCode={postalCode}>
                <CityInfoDisplay postalCode={postalCode} />
            </ItemComponent>
            <ItemComponent postalCode={postalCode}>
                <CityWeatherDisplay postalCode={postalCode} />
            </ItemComponent>
            <ItemComponent postalCode={postalCode}>
                <CityLocationDisplay postalCode={postalCode} />
            </ItemComponent>
        </div>
    );
}
