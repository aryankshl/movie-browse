import { useState, useEffect, useRef } from 'react';

//API
import API from "../API";

//Inicial State
const initialState= {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};


export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchterm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchterm, page);

      setState(prev => ({
        ...movies,
        results:
          // Appending the new moveis from page after 1 to the end of the array
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }))
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Fetching the movies from the datbase first page when the home page is loaded
  useEffect(() => {
    fetchMovies(1);
  }, []);

  return {state: state,loading: loading,error: error};
};
