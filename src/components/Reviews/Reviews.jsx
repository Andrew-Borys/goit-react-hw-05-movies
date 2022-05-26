import { getReviews } from '../../services/API';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // console.log('Revievs:', useLocation());

  useEffect(() => {
    setIsLoading(true);
    getReviews(movieId)
      .then(response => {
        setReviews(response);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        navigate('/');
      });
  }, [pathname, movieId, navigate]);

  return (
    <div>
      {isLoading && Loading.dots('Loading...')}
      {!isLoading && Loading.remove()}
      {reviews && reviews.results.length !== 0 ? (
        <ul>
          {reviews.results.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>Oops... There are no reviews yet... ¯_(ツ) _/¯</h3>
      )}
    </div>
  );
};
export default Reviews;
