import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMoviesById } from 'API/movies';
import { useEffect, useState } from 'react';
import s from './MovieDetailsPage.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (movieId) {
        try {
          setIsLoading(true);
          setError(null);
          const results = await getMoviesById(movieId);
          setMovie(results);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [movieId]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location.state);
  };

  const location = useLocation();

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h2>Loding...</h2>}
      <button onClick={handleClick}>&#129044; Go back</button>
      {movie && (
        <>
          <div className={s.wrap}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h1>
                {movie.original_title} {`(${movie.release_date.slice(0, 4)})`}
              </h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              {movie.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
              {/* console.log(movie); */}
            </div>
          </div>

          <hr />
          <p>Additional information</p>
          <ul className={s.addInfo}>
            <Link className={s.addInfoItem} to="cast" state={location.state}>
              Cast
            </Link>
            <Link className={s.addInfoItem} to="reviews" state={location.state}>
              Reviews
            </Link>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MovieDetails;
