// Series.js
import React, { useEffect, useState } from 'react';
import ContentGrid from './ContentGrid';

const API_KEY = 'd33176363863ef13bb14856763069045';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchSeries();
  }, []);

  async function fetchSeries() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`);
      const data = await res.json();
      if (data && Array.isArray(data.results)) {
        setSeries(data.results.slice(0, 12));
      }
    } catch (error) {
      console.error('Error al cargar series:', error);
    }
  }

  return <ContentGrid title="Popular Series" items={series} />;
};

export default Series;
