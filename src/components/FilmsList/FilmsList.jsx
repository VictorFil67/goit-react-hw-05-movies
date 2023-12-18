import { Film } from 'components/Film/Film';
import { Link, useLocation } from 'react-router-dom';

export const FilmsList = ({ films }) => {
  const location = useLocation();

  return (
    <>
      {/* {error && <h1>{error}</h1>}
      {isLoading && <h2>Loding...</h2>} */}

      <ul>
        {films.map(film => (
          <Link
            key={film.id}
            to={
              location.pathname === '/movies'
                ? `${film.id}`
                : `movies/${film.id}`
            }
            state={location}
          >
            <Film title={film.title || film.name} film={film} />
          </Link>
        ))}
      </ul>
    </>
  );
};
