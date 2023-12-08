import { movieCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const defaultImage =
    'https://sysx-legacy.sfo2.cdn.digitaloceanspaces.com/products/lg/nopic.jpg';
  useEffect(() => {
    if (!movieId) return;

    async function getCastMovie() {
      try {
        setLoading(true);
        const backendCast = await movieCast(movieId);
        setMovie(backendCast);
      } catch (error) {
        alert('Oops try again1!!');
      } finally {
        setLoading(false);
      }
    }

    getCastMovie();
  }, [movieId]);
  return (
    <div>
      {loading && <p>loading...</p>}
      <Container>
        {movie.length > 0 ? (
          movie.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImage
                }
                alt={name}
                width={250}
                height={375}
              />
              <p>{name}</p>
              <p>{`Character: ${character}`}</p>
            </li>
          ))
        ) : (
          <p>We don't have any information about the actors.</p>
        )}
      </Container>
    </div>
  );
};
export default Cast;
