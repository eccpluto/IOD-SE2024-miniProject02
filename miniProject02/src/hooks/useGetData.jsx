// generic hook to get json data from an api

import { useEffect } from "react"
import { useState } from "react";

export function useGetData(url) {

    // hold fetched json data
    const [data, setData] = useState(null)

    useEffect(() => {
        console.log('running effect');

        // for preventing race condition
        // https://reacttraining.com/blog/useEffect-cleanup
        let ignore = false;

        // effect
        if (url) {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setData(json);
                    }
                }), { mode: 'cors' };
        };

        // cleanup when umounted || when dependency array changes
        return () => {
            console.log('cleaning up');
            // this will prevent the currently executing effect from setting state when the promise above resolves!
            ignore = true;
        }

        // dependencies
    }, [url]) // only run effect when url changes

    return data;
}