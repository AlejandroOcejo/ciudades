/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { screen, render, waitFor } from '@testing-library/react';
import React, { useEffect, useMemo } from 'react';
import { json } from 'react-router-dom';
import usePostalCode from './usePostalCode';
import useFetch from './useFetch';
import { useFetchInfoContext } from '../context/fetchInfoContext';
import { useLogContext } from '../context/LogContext';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import useCityInfo from './useCityInfo';

global.fetch = jest.fn();

jest.mock('./usePostalCode', () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock('./useFetch', () => ({
    __esModule: true,
    default: jest.fn()
}))

jest.mock('../context/fetchInfoContext', () => ({
    useFetchInfoContext: jest.fn(),
}));

jest.mock('../context/LogContext', () => ({
    useLogContext: () => ({
        postalCodeLog: ['50015'],
        setPostalCodeFromLog: jest.fn(),
    }),

}));


const TestComponent = () => {
    const { infoContext } = useCityInfo();

    /*
        useCityInfo()
    
        let displayData = "";
        if (data) {
            const { country, "post code": postCode } = data;
            displayData = `Country: ${country}, Post Code: ${postCode}`;
        }
    
        return (
            <div id="idData">{isLoading ? "Loading..." : error ? error.message : displayData}</div>
        );
        */
    return (
        <div id="infoContext">{infoContext}</div>
    );

};



let container = null;
beforeEach(() => {
    jest.clearAllMocks();
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("Working fetch", async () => {

    useFetch.mockReturnValue({
        data: {
            places: [{
                "post code": "50015",
                "country": "Spain",
                "place_name": "Zaragoza",
                "state_abbreviation": "AR",
                "longitude": "-0.8737",
                "latitude": "41.668"
            }
            ]

        },
        isLoading: false,
        error: null,
        call: jest.fn()
    });

    usePostalCode.mockImplementation(() => ({ postalCode: '50015' }));
    useFetchInfoContext.mockImplementation(() => (
        { setinfoContext: jest.fn(), infoContext: "TextInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    console.log(container.innerHTML);
    const dataElement = container.querySelector("#infoContext");
    console.log(dataElement);
    if (dataElement) {
        console.log(dataElement.textContent);
    }

});


it("null postal code", async () => {

    useFetch.mockReturnValue({
        data: {
            places: [{
                "post code": "50015",
                "country": "Spain",
                "place_name": "Zaragoza",
                "state_abbreviation": "AR",
                "longitude": "-0.8737",
                "latitude": "41.668"
            }
            ]

        },
        isLoading: false,
        error: null,
        call: jest.fn()
    });

    usePostalCode.mockImplementation(() => ({}));
    useFetchInfoContext.mockImplementation(() => (
        { setinfoContext: jest.fn(), infoContext: "TextInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    console.log(container.innerHTML);
    const dataElement = container.querySelector("#infoContext");
    console.log(dataElement);
    if (dataElement) {
        console.log(dataElement.textContent);
    }

});

it("no places", async () => {

    useFetch.mockReturnValue({
        data: {},
        isLoading: false,
        error: null,
        call: jest.fn()
    });

    usePostalCode.mockImplementation(() => ({}));
    useFetchInfoContext.mockImplementation(() => (
        { setinfoContext: jest.fn(), infoContext: "TextInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    console.log(container.innerHTML);
    const dataElement = container.querySelector("#infoContext");
    console.log(dataElement);
    if (dataElement) {
        console.log(dataElement.textContent);
    }

});

it("no data", async () => {

    useFetch.mockReturnValue({
        isLoading: false,
        error: null,
        call: jest.fn()
    });

    usePostalCode.mockImplementation(() => ({}));
    useFetchInfoContext.mockImplementation(() => (
        { setinfoContext: jest.fn(), infoContext: "TextInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    console.log(container.innerHTML);
    const dataElement = container.querySelector("#infoContext");
    console.log(dataElement);
    if (dataElement) {
        console.log(dataElement.textContent);
    }

});

it("included postal code", async () => {
    usePostalCode.mockImplementation(() => ('50015'));

    useFetch.mockReturnValue({
        isLoading: false,
        error: null,
        call: jest.fn()
    });
    useLogContext.mockImplementation(() => ({
        postalCodeLog: [{
            postalCode: '50015'
        }],
        setPostalCodeFromLog: jest.fn()
    }))
    useFetchInfoContext.mockImplementation(() => (
        { setinfoContext: jest.fn(), infoContext: "TextInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    console.log(container.innerHTML);
    const dataElement = container.querySelector("#infoContext");
    console.log(dataElement);
    if (dataElement) {
        console.log(dataElement.textContent);
    }

});