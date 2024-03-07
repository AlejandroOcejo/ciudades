/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-unnecessary-act */
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import { LogContextProvider } from './LogContext';
import { useLogContext } from './LogContext';
import { useEffect } from 'react';


const TestComponent = () => {
    const [step, setStep] = useState(0)
    const { postalCodeLog, setPostalCodeFromLog } = useLogContext();

    useEffect(() => {
        if(step === 0){
            setPostalCodeFromLog(['10001', '20001', '30001']);
            setStep(1)
        }
    }, [step]);

    return (
        <div id="contextValue">
            {postalCodeLog}
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


it("comprueba que el valor de logcontext sea igual a x", async () => {

    await act(async () => {
        render(
            <LogContextProvider>
                <TestComponent />
            </LogContextProvider>,
            { container }
        );
    });


    console.log(container.innerHTML);
    const infoContextElement = container.querySelector("#contextValue");
    expect(infoContextElement.textContent).toBe('100012000130001');
});