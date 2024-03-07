import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import usePostalCode from '../../hooks/usePostalCode'
import { useLogContext } from '../../context/LogContext';
import React from 'react';
import SearchLog from './searchLog';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../context/LogContext', () => ({
    useLogContext: jest.fn()
}));

jest.mock('../../hooks/usePostalCode', () => ({
    __esModule: true,
    default: jest.fn(),
}));

describe('SearchLog', () => {

    afterEach(cleanup);

    it('Simula el click en uno de los codigos postales', () => {
        const mockSetPostalCode = jest.fn();

        useLogContext.mockImplementation(() => ({
            postalCodeLog: ['10001', '20001', '30001']
        }));

        usePostalCode.mockReturnValue({ setPostalCode: mockSetPostalCode });

        render(
            <MemoryRouter >
                <SearchLog />
            </MemoryRouter>
        );

        const firstPostalCodeButton = screen.getByText('10001');
        fireEvent.click(firstPostalCodeButton);

        expect(mockSetPostalCode).toHaveBeenCalledWith('10001');
    });
});
