import { useContext } from 'react';
import { PostalCodeContext } from '../context/PostalCodeContext';

function usePostalCode() {
    const { postalCode, setPostalCode } = useContext(PostalCodeContext);
    return { postalCode, setPostalCode };
}

export default usePostalCode;
