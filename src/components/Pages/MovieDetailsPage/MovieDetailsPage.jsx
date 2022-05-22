import { useLocation, useParams, useNavigate, Outlet } from 'react-router-dom';
import { getDetails } from '../../services/API';
import { useState, useEffect } from 'react';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import MovieNavigationDetalis from 'components/MovieNavigationDetalis';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getDetails(movieId)
      .then(response => {
        setIsLoading(false);
        setMovie(response);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [movieId]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      {isLoading && Loading.dots('Loading...')}
      {!isLoading && Loading.remove()}
      {movie && (
        <>
          <h2>Title: {movie.title || movie.original_title}</h2>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o='
            }
            alt="Movie poster"
          />
          <div>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Release date:</h3>
            <p>{movie.release_date}</p>
          </div>
          <div>
            <h3>Vote average:</h3>
            <p>{movie.vote_average}</p>
          </div>
        </>
      )}
      <MovieNavigationDetalis movieId={movieId} />
      {/* <NavLink
        // to={`${location.pathname}/cast`
        to="cast"
      >
        Casts
      </NavLink>
      <NavLink
        style={{ marginLeft: '15px' }}
        // to={`${location.pathname}/reviews`}
        to="reviews"
      >
        Reviews
      </NavLink> */}

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
