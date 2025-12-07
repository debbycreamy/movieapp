import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
 
  const [savedMovies, setSavedMovies] = useState(() => {
    const stored = localStorage.getItem("savedMovies");
    return stored ? JSON.parse(stored) : [];
  });

 
  const [likedMovies, setLikedMovies] = useState(() => {
    const stored = localStorage.getItem("likedMovies");
    return stored ? JSON.parse(stored) : [];
  });


  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  
  useEffect(() => {
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
  }, [likedMovies]);

  
  const saveMovie = (movie) => {
    setSavedMovies((prev) =>
      prev.find((m) => m.imdbID === movie.imdbID) ? prev : [...prev, movie]
    );
  };

  const removeMovie = (imdbID) => {
    setSavedMovies((prev) => prev.filter((m) => m.imdbID !== imdbID));
  };

 
  const likeMovie = (movie) => {
    setLikedMovies((prev) =>
      prev.find((m) => m.imdbID === movie.imdbID) ? prev : [...prev, movie]
    );
  };

  const unlikeMovie = (imdbID) => {
    setLikedMovies((prev) => prev.filter((m) => m.imdbID !== imdbID));
  };

  return (
    <MovieContext.Provider
      value={{
        savedMovies,
        saveMovie,
        removeMovie,
        likedMovies,
        likeMovie,
        unlikeMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
