import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import "./PageBg.css";

const API_KEY = "b88a883d";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const Home = () => {
 
  const [search, setSearch] = useState(() => {
    return localStorage.getItem("lastSearch") || "batman";
  });
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}&s=${search}`);
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="page-bg p-6">
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="border p-2 rounded w-full dark:bg-gray-700 dark:text-white"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            localStorage.setItem("lastSearch", e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchMovies();
          }}
        />

        <button
          onClick={fetchMovies}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p className="text-gray-700 dark:text-white">Loading...</p>
      ) : movies.length === 0 ? (
        <p className="text-gray-700 dark:text-white">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
