/********** ********** ********** **********/
/* @fileoverview Use Data
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-07
/********** ********** ********** **********/

import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)});
        return () => controller.abort();
    }, []);

    return { data, error, isLoading };
}

export default useData;
