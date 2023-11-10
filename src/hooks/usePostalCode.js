import { useContext } from 'react';
import { postalCodeContext } from '../components/searchBar/searchBar';

function usePostalCode() {

    const { postalCode, setPostalCode } = useContext(postalCodeContext);
    return { postalCode, setPostalCode };
}


export default usePostalCode;
