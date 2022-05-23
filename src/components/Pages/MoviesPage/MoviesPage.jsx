import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchQuery } from '../../services/API';
import SearchForm from '../../SearchForm';
import Gallery from 'components/Gallery';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import * as Scroll from 'react-scroll';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = query => {
    query === '' &&
      Report.info('Bad Request', 'Try entering a movie title.', 'Try again');

    setSearchParams({
      query: query,
      page: 1,
    });
  };

  const searchQuery = searchParams.get('query') ?? '';
  const currentPage = searchParams.get('page') ?? 1;

  const handleIncrement = e => {
    setSearchParams({
      query: searchQuery,
      page: Number(currentPage) + 1,
    });
    Scroll.animateScroll.scrollToTop();
  };

  const handleDecrement = e => {
    setSearchParams({
      query: searchQuery,
      page: Number(currentPage) - 1,
    });
    Scroll.animateScroll.scrollToTop();
  };

  useEffect(() => {
    if (!searchQuery) return setSearchParams('');
    setIsLoading(true);
    getSearchQuery(searchQuery, currentPage)
      .then(response => {
        if (response.results.length === 0) {
          Report.info(
            'Oops...',
            `Your search: ${searchQuery} returned no results!`,
            'Try again'
          );
        }
        setMovies(response.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        Report.info(`${error.code}`, `${error.message}`, 'Try again');
      });
  }, [currentPage, searchQuery, setSearchParams]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {isLoading && Loading.dots('Loading...')}
      {!isLoading && Loading.remove()}
      <Gallery
        films={movies}
        page={Number(currentPage)}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </>
  );
};

export default MoviesPage;
