/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import {useWeatherInfoContext} from './WeatherInfoContext'
import { WeatherInfoProvider } from './WeatherInfoContext';
import { useEffect } from 'react';


const TestComponent = () => {
    const { weatherInfoContext, setweatherInfoContext } = useWeatherInfoContext();

    useEffect(() => {
        setweatherInfoContext([]);
    }, []);

    return (
        <div id="contextValue">
            {weatherInfoContext}
        </div>
    );
}

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


it("comprueba que el valor de WeatherInfoContext sea igual a x", async () => {

    await act(async () => {
        render(
            <WeatherInfoProvider>
                <TestComponent />
            </WeatherInfoProvider>,
            { container }
        );
    });


    console.log(container.innerHTML);
    const infoContextElement = container.querySelector("#contextValue");
    expect(infoContextElement.textContent).toBe('');
});