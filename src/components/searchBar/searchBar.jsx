import React, { useState, useContext } from 'react';
import { usePostalCodeContext } from '../../context/PostalCodeContext.js';
import ErrorComponent from '../errorComponent/errorComponent.jsx';
import useCityInfo from '../../hooks/useCityInfo.js'
import useWeatherInfo from '../../hooks/useWeatherInfo.js';

export function handleFormSubmit(inputValue, setPostalCode, setActive) {
    if (inputValue.length !== 5 || isNaN(Number(inputValue))) {
        setActive(true);
    } else {
        setPostalCode(inputValue);
        setActive(false);
        console.log(inputValue);
    }
}

export default function SearchBar(props) {
    const { setPostalCode } = usePostalCodeContext();
    const [active, setActive] = useState(false);
    let inlineStyle = {};
    useCityInfo();
    useWeatherInfo();

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit(inputValue, setPostalCode, setActive);
    };

    const errorStyle = {
        display: active ? 'none' : 'block',
    };

    return (
        <div style={inlineStyle}>
            <form data-testid="search-form" onSubmit={handleSubmit}>
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

