import { useState, useEffect } from "react";
import axios from "axios";
import json from '../api/jobit.json'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": '77022cedf4mshb36650fd7440662p1621e7jsn54459c9c1105',
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };


    const fetchData = async () => {
        setIsLoading(true);

        try {
        const response = options;

        setData(response.data.data);
        setIsLoading(false);
        } catch (error) {
        setError(error);
            alert(error.message);
        } finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;