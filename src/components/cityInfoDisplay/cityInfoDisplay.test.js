/* eslint-disable testing-library/no-unnecessary-act */
import { render, cleanup, screen } from '@testing-library/react';
import CityInfoDisplay from './cityInfoDisplay';
import { useFetchInfoContext } from '../../context/fetchInfoContext';
import usePostalCode from '../../hooks/usePostalCode';
import useFetch from '../../hooks/useFetch';

import React from 'react';

jest.mock('../../hooks/usePostalCode', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('../../hooks/useFetch', () => ({
    __esModule: true,
    default: jest.fn()
}));

jest.mock('../../context/fetchInfoContext', () => ({
    useFetchInfoContext: jest.fn(),
}));

jest.mock('../flagComponent/flagComponent', () => ({
    __esModule: true,
    default: () => <div>Mock Flag Component</div>,
}));

describe('CityInfoDisplay', () => {

    afterEach(cleanup);

    it('renders information from context', () => {
        usePostalCode.mockImplementation(() => ({ postalCode: '50015' }));
        useFetch.mockImplementation(() => ({ data: null }));
        useFetchInfoContext.mockImplementation(() => ({
            infoContext: [{ state_abbreviation: 'AN', place_name: 'Ciudad Test', state: 'Comunidad Test' }]
        }));

        render(
            <CityInfoDisplay />
        );

        expect(screen.getByText(/Ciudad:/)).toBeInTheDocument();
        expect(screen.getByText(/Ciudad Test/)).toBeInTheDocument();
        expect(screen.getByText(/Ciudad:/)).toBeInTheDocument();
        expect(screen.getByText(/Ciudad Test/)).toBeInTheDocument();

    });
});