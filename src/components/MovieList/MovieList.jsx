import { Link, useLocation } from 'react-router-dom';
import List from './MovieList.styled';
const MovieList = ({ items }) => {
  const location = useLocation();
  const defaultImage =
    'https://sysx-legacy.sfo2.cdn.digitaloceanspaces.com/products/lg/nopic.jpg';
  return (
    <List>
      {items.map(({ poster_path, name, title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImage
                  }
                  alt={name || title}
                  width={250}
                  height={375}
                />
                <p className="list__text">{name || title}</p>
              </div>
            }
          </Link>
        </li>
      ))}
    </List>
  );
};
export default MovieList;
