/*
- Crear hooks para llamadas a servicios ------
- Crear componente bandera. ------
- Crear un componente para pestañas
- Crear un router, crear páginas. Refactorizar, sacar componentes a las páginas.
- ItemComponente, eliminar estado iconDisplay ------
- Validaciones antes de la llamada al servicio.  ------
*/

import { useState, useEffect, useContext } from "react";
import getCityInfo from "../services/getCityInfo";
import { FetchInfoContext } from "../context/fetchInfoContext";

function useFetch(postalCode) {
    const { setinfoContext, infoContext } = useContext(FetchInfoContext);
    /* const [info, setInfo] = useState([]); */

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cityInfo = await getCityInfo(postalCode);
                /* setInfo(cityInfo); */
                setinfoContext(cityInfo);
                console.log(infoContext);
            } catch (error) {
                console.error("Error fetching city info:", error);
            }
        };

        fetchData();
    }, [postalCode, setinfoContext]);

}

export default useFetch;
