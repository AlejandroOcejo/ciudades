import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./searchBar";
import { usePostalCodeContext } from "../../context/PostalCodeContext";
import useCityInfo from "../../hooks/useCityInfo";
import useWeatherInfo from "../../hooks/useWeatherInfo";
import { handleFormSubmit } from "./searchBar";

jest.mock('../../context/PostalCodeContext', () => ({
    usePostalCodeContext: jest.fn(() => ({
        setPostalCode: jest.fn(),
    })),
}));

jest.mock('../../hooks/useCityInfo', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('../../hooks/useWeatherInfo', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe('CityInfoDisplay', () => {
    afterEach(cleanup);

    it('postal code input valid', () => {
        const setPostalCodeMock = jest.fn();
        usePostalCodeContext.mockImplementation(() => ({
            postalCode: '50015',
            setPostalCode: setPostalCodeMock,
        }));

        render(<SearchBar />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: '50015' } });
        fireEvent.submit(screen.getByTestId('search-form'));

    });
    it('postal code input invalid', () => {
        const setPostalCodeMock = jest.fn();
        usePostalCodeContext.mockImplementation(() => ({
            postalCode: 'a',
            setPostalCode: setPostalCodeMock,
        }));

        render(<SearchBar />);

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'a' } });
        fireEvent.submit(screen.getByTestId('search-form'));

    });
});
