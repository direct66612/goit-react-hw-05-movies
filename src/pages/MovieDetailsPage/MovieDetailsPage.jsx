import { movieWithId } from 'api';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
const MoviesDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    if (!movieId) return;

    async function getMovieById() {
      try {
        setLoading(true);
        const fetchedMovie = await movieWithId(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        alert('Please refresh page and try again');
      } finally {
        setLoading(false);
      }
    }
    getMovieById();
  }, [movieId]);
  return (
    <div>
      {loading && <p>loading...</p>}
      <Link to={backRef.current}>Go back</Link>

      {movie && <MovieDetails movie={movie} />}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MoviesDetailsPage;
