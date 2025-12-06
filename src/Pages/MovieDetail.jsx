import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./PageBg.css";

const API = "https://www.omdbapi.com/?apikey=b88a883d";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`${API}&i=${id}`);
      const data = await res.json();
      setMovie(data);

      findTrailer(data.Title);
    };

    fetchMovie();
  }, [id]);

  const findTrailer = async (title) => {
    try {
      const url =
        (await movieTrailer(title)) ||
        (await movieTrailer(`${title} trailer`)) ||
        (await movieTrailer(`${title} official`));

      if (!url) return;

      const videoId = new URLSearchParams(new URL(url).search).get("v");
      setTrailerId(videoId);
    } catch (error) {
      console.log("Trailer not found:", error);
    }
  };

  if (!movie) return <h2 className="p-6">Loading...</h2>;

  return (
    <div className="page-bg p-6 flex flex-col md:flex-row gap-6">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-80 rounded shadow"
      />

      <div className="flex-1">
        <h1 className="text-3xl font-bold dark:text-white">{movie.Title}</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">{movie.Plot}</p>

        <p className="mt-2">⭐ {movie.imdbRating}</p>
        <p>🎞 Genre: {movie.Genre}</p>
        <p>📅 Year: {movie.Year}</p>

        <div className="mt-6">
          <h2 className="text-xl font-bold dark:text-white mb-2">Trailer</h2>

          {trailerId ? (
            <YouTube
              videoId={trailerId}
              opts={{
                width: "100%",
                playerVars: {
                  autoplay: 0,
                },
              }}
            />
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No trailer found 😢
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
