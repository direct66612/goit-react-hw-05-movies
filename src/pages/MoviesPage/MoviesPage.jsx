import SearchFrom from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from 'api';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
const MoviesPage = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  const [search, setSearch] = useSearchParams();

  const handleSearch = query => {
    if (!query) {
      return;
    }
    setSearch({ search: query });
  };
  useEffect(() => {
    const query = search.get('search');
    if (!query) return;

    async function getSearchMovies() {
      try {
        setLoading(true);
        const searchMoviesFromInput = await searchMovies(query);
        setMovie(searchMoviesFromInput);
      } catch (error) {
        alert('Please refresh page and try again');
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [search]);
  return (
    <>
      {loading && <p>loading...</p>}
      <SearchFrom handleSubmit={handleSearch} />
      {search && <MovieList items={movie} />}
    </>
  );
};
export default MoviesPage;
