import { useContext } from 'react';
import { postalCodeContext } from '../components/searchBar/searchBar';

function usePostalCode() {
    return useContext(postalCodeContext);
}

export default usePostalCode;
