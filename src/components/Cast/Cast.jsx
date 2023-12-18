import { getCast } from 'API/movies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  getCast(movieId);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { cast } = await getCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);
  // console.log(cast);
  //   const navigate = useNavigate();

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h2>Loding...</h2>}

      {cast.length > 0 && (
        <ul>
          {cast.map(person => (
            <li className={s.itemPerson} key={person.cast_id}>
              <img
                className={s.personPhoto}
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                alt={person.name}
              />
              <p>{person.name}</p>
              <p>Character: {person.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
