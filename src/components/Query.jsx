import React from 'react';
import Axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const Query = () => {
  const { data:catdata, isLoading, isError } = useQuery('catFact', () => {
    return Axios.get('https://catfact.ninja/fact').then((res)=>res.data);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="w-full h-screen">
       <h1>{catdata?.fact}</h1>
    </div>
  );
};
