import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";
import "./PageBg.css";

const Saved = () => {
  const { savedMovies } = useContext(MovieContext);

  return (
    <div className="page-bg p-6 ">
      <h1 className="text-2xl font-bold mb-4">Saved Movies</h1>

      {savedMovies.length === 0 && <p>No saved movies yet.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {savedMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Saved;
