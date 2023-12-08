import Container from './MovieDetails.styled';
const MovieDetails = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const defaultImage =
    'https://sysx-legacy.sfo2.cdn.digitaloceanspaces.com/products/lg/nopic.jpg';
  return (
    <Container>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImage
        }
        alt={title}
        width={400}
      />
      <div>
        <h1>{`${title} (${release_date.split('-')[0]})`}</h1>
        <h4>{`User Store: ${Math.round(vote_average * 10)}%`}</h4>
        <h2>Owerview</h2>
        <p>{overview}</p>
        {genres && genres.length > 0 && (
          <>
            <h3>Genres</h3>
            <p>
              {genres.map((genre, id) => (
                <span key={id}>{genre.name}</span>
              ))}
            </p>
          </>
        )}
      </div>
    </Container>
  );
};

export default MovieDetails;
