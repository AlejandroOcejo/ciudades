import { useState, useEffect, useContext } from "react";
import usePostalCode from "./usePostalCode";
import { FetchInfoContext } from "../context/fetchInfoContext";
import { LogContext } from "../context/LogContext";

function useLog() {
    const { postalCode, setPostalCode } = usePostalCode();
    const { infoContext } = useContext(FetchInfoContext)
    const { postalCodeLog , setPostalCodeFromLog} = useContext(LogContext)

    useEffect(() => {
        if (!postalCodeLog.includes(postalCode) && postalCode !== "" && infoContext !== 'Error fetching city info') {
            setPostalCodeFromLog(postalCodeLog.concat(postalCode))
            console.log(postalCodeLog);
            console.log(postalCode);
        }
    }, [infoContext]);
}

export default useLog