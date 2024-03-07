import { cleanup, render, screen } from "@testing-library/react";
import CityLocationDisplay from "./cityLocationDisplay";
import { useFetchInfoContext } from "../../context/fetchInfoContext";

jest.mock('../../context/fetchInfoContext', () => ({
    useFetchInfoContext: jest.fn(),
}));

describe('CityInfoDisplay', () => {

    afterEach(cleanup);

    it('renders information from context', () => {
        useFetchInfoContext.mockImplementation(() => ({
            infoContext: [{ longitude: '1', latitude: '2' }]
        }));

        render(
            <CityLocationDisplay />
        );

        expect(screen.getByText(/Longitud:/)).toBeInTheDocument();
        expect(screen.getByText(/1/)).toBeInTheDocument();
        expect(screen.getByText(/Latitud:/)).toBeInTheDocument();
        expect(screen.getByText(/2/)).toBeInTheDocument();

    });
});