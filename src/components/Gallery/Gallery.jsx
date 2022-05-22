import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FilmList, FilmItem, FilmImg, ButtonsWrapper } from './Gallery.styled';
import Button from '../Button';

const Gallery = ({ films, page, handleIncrement, handleDecrement }) => {
  const location = useLocation();

  return (
    <>
      <FilmList>
        {films.map(movie => (
          <FilmItem key={movie.id} id={movie.id}>
            <Link
              to={
                location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
              }
              state={{
                from: location,
              }}
            >
              <FilmImg
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o='
                }
                alt={movie.title || movie.name}
              />
              <h3 style={{ marginLeft: '15px' }}>
                {movie.title || movie.name}
              </h3>
            </Link>
          </FilmItem>
        ))}
      </FilmList>
      <ButtonsWrapper>
        {page >= 2 && (
          <Button onClick={handleDecrement} title={'Previous page'} />
        )}
        {films.length >= 20 && (
          <Button onClick={handleIncrement} title={'Next page'} />
        )}
      </ButtonsWrapper>
    </>
  );
};

Gallery.propTypes = {
  films: PropTypes.array,
  page: PropTypes.number,
  incrementClick: PropTypes.func,
  decrementClick: PropTypes.func,
};

export default Gallery;
