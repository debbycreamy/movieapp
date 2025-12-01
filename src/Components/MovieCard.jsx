import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";

const MovieCard = ({ movie }) => {
  const { saveMovie, removeMovie, savedMovies } = useContext(MovieContext);

  const isSaved = savedMovies.some((m) => m.imdbID === movie.imdbID);

  return (
    <div className="bg-white dark:bg-gray-700 p-3 rounded shadow relative hover:scale-105 transition-transform">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-full h-64 object-cover rounded"
        />
      </Link>

      <h2 className="mt-2 font-bold text-lg text-gray-800 dark:text-white">
        {movie.Title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">{movie.Year}</p>

      <button
        onClick={() => (isSaved ? removeMovie(movie.imdbID) : saveMovie(movie))}
        className={`absolute top-2 right-2 px-2 py-1 rounded text-white ${
          isSaved ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isSaved ? "Remove" : "Save"}
      </button>
    </div>
  );
};

export default MovieCard;
