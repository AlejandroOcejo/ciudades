/*
- Crear hooks para llamadas a servicios 
- Crear componente bandera. ------
- Crear un componente para pestañas ------
- Crear un router, crear páginas. Refactorizar, sacar componentes a las páginas. ------
- ItemComponente, eliminar estado iconDisplay ------
- Validaciones antes de la llamada al servicio.  ------
*/

import { useState } from "react";

function useFetch() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const call = (urlFromHook) => {
        const url = urlFromHook;
        setIsLoading(true);
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("Not Found");
                    }
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
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
