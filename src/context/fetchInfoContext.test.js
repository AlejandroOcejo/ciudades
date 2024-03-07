/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import { FetchInfoProvider } from './fetchInfoContext';
import { useFetchInfoContext } from './fetchInfoContext';
import { useEffect } from 'react';


const TestComponent = () => {
    const { infoContext, setinfoContext } = useFetchInfoContext();

    useEffect(() => {
        setinfoContext(2); 
    }, []);

    return (
        <div id="contextValue">
            {infoContext}
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


it("comprueba que el valor de info context sea igual a x", async () => {


    await act(async () => {
        render(
            <FetchInfoProvider>
                <TestComponent />
            </FetchInfoProvider>,
            { container }
        );
    });


    console.log(container.innerHTML);
    const infoContextElement = container.querySelector("#contextValue");
    expect(infoContextElement.textContent).toBe('2');
});