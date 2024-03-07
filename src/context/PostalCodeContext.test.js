/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import { PostalCodeProvider } from './PostalCodeContext';
import usePostalCode from '../hooks/usePostalCode';
import { useEffect } from 'react';


const TestComponent = () => {
    const { postalCode, setPostalCode } = usePostalCode();

    useEffect(() => {
        setPostalCode('10001');
    }, []);

    return (
        <div id="contextValue">
            {postalCode}
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


it("comprueba que el valor de postalCode sea igual a x", async () => {

    await act(async () => {
        render(
            <PostalCodeProvider>
                <TestComponent />
            </PostalCodeProvider>,
            { container }
        );
    });


    console.log(container.innerHTML);
    const infoContextElement = container.querySelector("#contextValue");
    expect(infoContextElement.textContent).toBe('10001');
});