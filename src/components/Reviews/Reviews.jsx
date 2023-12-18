import { getReviews } from 'API/movies';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  getReviews(movieId);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await getReviews(movieId);

        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {error && <h1>{error}</h1>}
      {isLoading && <h2>Loding...</h2>}

      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h1> Sorry</h1>
      )}
    </div>
  );
};

export default Reviews;
