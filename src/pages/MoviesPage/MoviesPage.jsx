import { getMovieByQuery } from 'API/movies';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './MoviesPage.module.css';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const query = searchParams.get('query');
      if (query) {
        try {
          setIsLoading(true);
          setError(null);
          const { results } = await getMovieByQuery(query);
          setFilms(results);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getData();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });

    form.reset();
  };

  return (
    <>
      <form className={s.search} onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {error && <h1>{error}</h1>}
      {isLoading && <h2>Loding...</h2>}
      <FilmsList films={films} />
    </>
  );
};
export default Movies;
