/* eslint-disable testing-library/prefer-screen-queries */
import { render, cleanup, fireEvent } from '@testing-library/react';
import HeaderComponent from './headerComponent';
import { Router } from 'react-router-dom';
import React from 'react';
import { createMemoryHistory } from 'history';


describe('HeaderComponent', () => {
    afterEach(cleanup);

    it('renders the header with correct elements', () => {
        const history = createMemoryHistory()
        const { getByText } = render(
            <Router location={history.location} navigator={history}>
                <HeaderComponent />
            </Router>
        );
        expect(history.location.pathname).toBe('/');
        fireEvent.click(getByText('Historial'));
        expect(history.location.pathname).toBe('/log');

        /*         expect(getByText('Buscar')).toHaveAttribute('href', '/');
                expect(getByText('Historial')).toHaveAttribute('href', '/log'); */

    });

});
