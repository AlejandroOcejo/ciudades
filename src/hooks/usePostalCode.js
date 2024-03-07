import { useContext } from 'react';
import { PostalCodeContext, usePostalCodeContext } from '../context/PostalCodeContext';

function usePostalCode() {
    const { postalCode, setPostalCode } = usePostalCodeContext();
    return { postalCode, setPostalCode };
}

export default usePostalCode;
