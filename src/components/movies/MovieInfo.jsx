import { useParams, useLocation } from "react-router-dom";
import "./MovieInfo.css";

export const MovieInfo = () => {
  const { movieTitle } = useParams();
  const location = useLocation();
  const { moviesList } = location.state || {};

  const movie = moviesList.find(
    (movie) => movie.title.toLowerCase().replace(/ /g, "-") === movieTitle
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <body className="movieInfoBody">
      <div className="movieInfoContainer">
        <div className="moviePoster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }}>
          <div className="imageContainer">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className="movieInfoDetails">
            <h2>{movie.title} <mark>⭐️ {Math.round(movie.vote_average * 10) / 10}</mark></h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </body>
  );
};