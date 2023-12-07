import { movieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!movieId) return;

    async function getReviewsMovie() {
      try {
        setLoading(true);
        const backendReviews = await movieReviews(movieId);
        setMovie(backendReviews);
      } catch (error) {
        alert('oops something wrong please try again or refresh page');
      } finally {
        setLoading(false);
      }
    }

    getReviewsMovie();
  }, [movieId]);
  return (
    <div>
      {loading && <p>loading...</p>}

      {movie.length > 0 ? (
        movie.map(({ author, content, id }) => (
          <ul>
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
