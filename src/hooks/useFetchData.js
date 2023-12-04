/* 
import { useEffect, useState } from "react";

const useFetchData = (requestConfig) => {
    const localRequestConfig = requestConfig || {};
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null,
    });

    useEffect(() => {
        if (localRequestConfig.url) {
            fetch(localRequestConfig.url, {
                method: localRequestConfig.method,
                headers: localRequestConfig.headers,
                body: localRequestConfig.data,
            })
                .then((res) => res.json())
                .then((data) => {
                    setState((prevState) => ({
                        ...prevState,
                        data: data,
                    }));
                })
                .catch((err) => {
                    setState((prevState) => ({
                        ...prevState,
                        error: err,
                    }));
                })
                .finally(() => {
                    setState((prevState) => ({
                        ...prevState,
                        loading: false,
                    }));
                });
        } else {
            setState((prevState) => ({
                ...prevState,
                loading: false,
                error: new Error('No URL provided!'),
            }));
        }

        return () => {
        };
    }, [requestConfig]);

    return state;
};

export default useFetchData;
 */