import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../movies/MoviesList.css";

export const MoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);
    const apiEnv = import.meta.env.VITE_OPENDB_KEY;
    // const api_key = "27e08820918015780dc134fac22dd08b";
    const navigate = useNavigate();

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiEnv}&language=en-US&page=1`)
        .then((res) => res.json())
        .then(json => setMoviesList(json.results)
        );
    }

    useEffect(()=>{
        getMovies();
    },[]);

    return (
        <div className="moviesContainer">
          <div className="moviesInnerContainer">
            {moviesList.map((movie) => (
              <Link
                key={movie.id}
                to={`/movie/${movie.title.toLowerCase().replace(/ /g, "-")}`}
                state={{ moviesList }}
              >
                <div className="movieCard">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  <div className="movieDetails">
                    <h3>{movie.title}</h3>
                    <p>{new Date(movie.release_date).getFullYear()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
)};