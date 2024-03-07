/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from '@testing-library/react';
import usePostalCode from './usePostalCode';
import useFetch from './useFetch';
import { useFetchInfoContext } from '../context/fetchInfoContext';
import { useLogContext } from '../context/LogContext';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import useCityInfo from './useCityInfo';
import { useWeatherInfoContext } from '../context/WeatherInfoContext';
import useWeatherInfo from './useWeatherInfo';
import { useEffect } from 'react';

global.fetch = jest.fn();

jest.mock('./useFetch', () => ({
    __esModule: true,
    default: jest.fn()
}))

jest.mock('../context/fetchInfoContext', () => ({
    useFetchInfoContext: jest.fn(),
}));

jest.mock('../context/WeatherInfoContext', () => ({
    useWeatherInfoContext: jest.fn()
}))

const TestComponent = () => {
    const WeatherInfoContext = useWeatherInfo()


    /*     useEffect(() => {
            call('https://api.open-meteo.com/v1/forecast?latitude=0&longitude=1&hourly=temperature')
        }) */


    return (
        <div id="idWeatherInfo">{WeatherInfoContext}</div>
    );
};



let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("working fetch", async () => {

    useFetch.mockReturnValue({
        data: {
            longitude: "1",
            latitude: "2",
            hourly: {
                time: ['2024-02-16T00:00', '2024-02-16T01:00'],
                temperature: [10, 12],
            },
        },
        isLoading: false,
        error: null,
        call: jest.fn()
    });

    useFetchInfoContext.mockImplementation(() => (
        {
            setinfoContext: jest.fn(), infoContext: [{
                longitude: "1",
                latitude: "2",
            }]
        }
    ))

    useWeatherInfoContext.mockImplementation(() => (
        { setweatherInfoContext: jest.fn(), WeatherInfoContext: "WeatherInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    const dataElement = container.querySelector("#idWeatherInfo");
    console.log(dataElement);

});

it("no data", async () => {

    useFetch.mockReturnValue({
        isLoading: false,
        error: null,
        call: jest.fn()
    });

    useFetchInfoContext.mockImplementation(() => (
        {
            setinfoContext: jest.fn(), infoContext: null
        }
    ))

    useWeatherInfoContext.mockImplementation(() => (
        { setweatherInfoContext: jest.fn(), WeatherInfoContext: "WeatherInfoContext" }
    ))


    await act(async () => {
        render(<TestComponent />, container);
    });

    const dataElement = container.querySelector("#idWeatherInfo");
    console.log(dataElement);

});


