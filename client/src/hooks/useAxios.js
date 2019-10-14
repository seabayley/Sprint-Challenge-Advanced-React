import React, { useState, useEffect } from "react"
import axios from "axios"

const useAxios = (apiUrl, init) => {

    const [apiData, setApiData] = useState(init)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getApiData = async function () {
            try {
                setLoading(true)
                const res = await axios.get(apiUrl)
                if (res.status === 200) setApiData(res.data)
            } catch (error) {
                throw error;
            } finally {
                setLoading(false);
            }
        };
        getApiData();
    }, [apiUrl]);
    return { loading, apiData };
};

export default useAxios;