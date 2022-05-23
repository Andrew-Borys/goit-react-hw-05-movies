import { NavLink, useLocation } from 'react-router-dom';

const MovieNavigationDetalis = () => {
  const location = useLocation();
  return (
    <>
      <NavLink to="cast" state={{ from: location?.state?.from }}>
        Casts
      </NavLink>
      <NavLink
        style={{ marginLeft: '15px' }}
        to="reviews"
        state={{ from: location?.state?.from }}
      >
        Reviews
      </NavLink>
    </>
  );
};

export default MovieNavigationDetalis;
