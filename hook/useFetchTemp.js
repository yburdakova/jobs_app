import { useState, useEffect } from "react";
import dataBase from "../api/fakeAPI";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        url: `/{endpoint}`,
        params: { ...query },
    };
    
    const fetchData = async () => {
        setIsLoading(true);
        const response = dataBase.data.filter(item => item.job_id === query.job_id)
        try {
        setData(response);
        setIsLoading(false);
        } catch (error) {
        setError(error);
            alert("ERRROR!!!");
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