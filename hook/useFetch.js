import { useState, useEffect } from "react";
import axios from "axios";

const RAPID_API_KEY = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "9751e8606cmsha3aa9b6ae52afddp147392jsne763ca032db2",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      // setLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetch };
};

export default useFetch;
