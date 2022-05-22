import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTrending } from '../../services/API';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Gallery from 'components/Gallery';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');

  const currentPage = searchParams.get('page') ?? 1;

  const handleIncrement = e => {
    setSearchParams({
      page: Number(currentPage) + 1,
    });
  };

  const handleDecrement = e => {
    setSearchParams({
      page: Number(currentPage) - 1,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getTrending(currentPage)
      .then(response => {
        setFilms(response.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && Loading.dots('Loading...')}
      {!isLoading && Loading.remove()}
      {films && (
        <Gallery
          films={films}
          page={Number(currentPage)}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      )}
    </>
  );
};

export default HomePage;
