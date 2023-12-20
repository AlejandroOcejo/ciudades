/*
- Crear hooks para llamadas a servicios 
- Crear componente bandera. ------
- Crear un componente para pestañas ------
- Crear un router, crear páginas. Refactorizar, sacar componentes a las páginas. ------
- ItemComponente, eliminar estado iconDisplay ------
- Validaciones antes de la llamada al servicio.  ------
*/

import { useState, useContext } from "react";
import { FetchInfoContext } from "../context/fetchInfoContext";

function useFetch() {
    const { setinfoContext } = useContext(FetchInfoContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const call = (urlFromHook) => {
        const url = urlFromHook;
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((fetchedData) => {
                console.log("data", fetchedData);
                setData(fetchedData);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    };
    return { data, isLoading, error, call };
}

export default useFetch;
