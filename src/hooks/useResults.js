import { useState, useEffect } from 'react';
import fpRankings from '../api/fpRankings';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (formatType) => {
    try {
      const response = await fpRankings.get(`/rankings?format=${formatType}`);

      setResults(response.data);
    } catch (err) {
      setErrorMessage('Something Went Wrong')
    }
  }; 

  useEffect((term) => {
    searchApi(term)
  })
  //console.log(results);
  return [searchApi, results, errorMessage];
};
