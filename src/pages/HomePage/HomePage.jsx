import MovieList from 'components/MovieList/MovieList';
import { trendingMovies } from 'api';
import { useEffect, useState } from 'react';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    trendingMovies()
      .then(setMovies)
      .catch(() => {
        alert('Please refresh page and try again');
      })
      .finally(setLoading(false));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Trending today</h1>
      {loading && <p>loading...</p>}
      {movies.length > 0 && <MovieList items={movies} />}
    </div>
  );
};
export default HomePage;
