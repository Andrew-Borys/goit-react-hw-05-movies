import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Container from './Container';
import Cast from './Cast';
import Reviews from './Reviews';
const Layout = lazy(() => import('./Layout' /*webpackChunkName: "Layout"*/));
const HomePage = lazy(() =>
  import('./Pages/HomePage' /*webpackChunkName: "HomePage"*/)
);
const MoviesPage = lazy(() =>
  import('./Pages/MoviesPage' /*webpackChunkName: "MoviesPage"*/)
);
const MovieDetailsPage = lazy(() =>
  import('./Pages/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage"*/)
);
const NotFound = lazy(() =>
  import('./Pages/NotFoundPage' /*webpackChunkName: "NotFound"*/)
);

// import Layout from './Layout';
// import HomePage from './Pages/HomePage';
// import MoviesPage from './Pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from './Pages/MovieDetailsPage';
// import NotFound from './Pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <Container>
        <Suspense fallback={Loading.hourglass('Loading...')}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};
