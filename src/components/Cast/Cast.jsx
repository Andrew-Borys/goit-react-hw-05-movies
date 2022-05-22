import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getCasts } from '../services/API';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { CastImg, CastItem, CastList, CastTitle } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getCasts(movieId)
      .then(response => {
        setCast(response.cast);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        navigate('/');
      });
  }, [movieId, navigate, pathname]);

  return (
    <div>
      {isLoading && Loading.dots('Loading...')}
      {!isLoading && Loading.remove()}
      {cast && cast.length !== 0 ? (
        <CastList>
          {cast.map(cast => (
            <CastItem key={cast.cast_id}>
              <CastImg
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : 'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?b=1&k=20&m=1216251206&s=170667a&w=0&h=z0hxu_BaI_tuMjMneE_APbnx_-R2KGPXgDjdwLw5W7o='
                }
                alt={cast.name || cast.original_name}
              />
              <CastTitle>{cast.name || cast.original_name}</CastTitle>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <h3>There no information about cast</h3>
      )}
    </div>
  );
};

export default Cast;
