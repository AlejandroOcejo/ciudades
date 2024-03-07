/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from '@testing-library/react';
import usePostalCode from './usePostalCode';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import { usePostalCodeContext } from '../context/PostalCodeContext';

global.fetch = jest.fn();

jest.mock('../context/PostalCodeContext', () => ({
    usePostalCodeContext: jest.fn()
}))



const TestComponent = () => {

    const { postalCode, setPostalCode } = usePostalCode();
    return (
        <div id="idPostalCode">
            Postal Code: {postalCode}
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


it("postal Code", async () => {

    usePostalCodeContext.mockImplementation(() => ({
        postalCode: 1
    }))


    await act(async () => {
        render(<TestComponent />, container);
    });

    const dataElement = container.querySelector("#idPostalCode");
    console.log(dataElement);


    expect(usePostalCode.postalCode).toBe(1)
});