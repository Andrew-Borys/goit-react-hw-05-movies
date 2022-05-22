import { Link } from './MainNavigation.styled';

const MainNavigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movie</Link>
    </nav>
  );
};

export default MainNavigation;
