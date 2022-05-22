import { NavLink } from 'react-router-dom';

const MovieNavigationDetalis = () => {
  return (
    <>
      <NavLink to="cast">Casts</NavLink>
      <NavLink style={{ marginLeft: '15px' }} to="reviews">
        Reviews
      </NavLink>
    </>
  );
};

export default MovieNavigationDetalis;
