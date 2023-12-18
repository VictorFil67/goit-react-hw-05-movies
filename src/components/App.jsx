import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Layout = lazy(() => import('./Layout/Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 20,
        fontSize: 14,
        color: '#010101',
      }}
    >
      {/* React homework template
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink> */}
      {/* <NavLink to="/movies/:movieId">MovieDetails</NavLink> */}
      {/* </nav> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
