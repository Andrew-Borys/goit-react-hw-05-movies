import { useState, useEffect } from 'react';
import { getTrending } from '../services/API';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export default function HomeTrendingPage() {
  const [trendMovie, setTrendMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const setTrend = async () => {
      setIsLoading(true);
      try {
        const list = await getTrending();
        setTrendMovie(list);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(true);
      }
    };
    setTrend();
  }, []);

  console.log('trendMovie', trendMovie);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && Loading.dots('Loading...')}
      {!isLoading && Loading.remove()}
      {error && <p>404 Opss... Page was not found</p>}
      <ul>
        {trendMovie.map(item => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
