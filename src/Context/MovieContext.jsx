import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // Load saved movies from localStorage on mount
  const [savedMovies, setSavedMovies] = useState(() => {
    const stored = localStorage.getItem("savedMovies");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever savedMovies changes
  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const saveMovie = (movie) => {
    setSavedMovies((prev) => {
      if (!prev.find((m) => m.imdbID === movie.imdbID)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const removeMovie = (imdbID) => {
    setSavedMovies((prev) => prev.filter((m) => m.imdbID !== imdbID));
  };

  return (
    <MovieContext.Provider value={{ savedMovies, saveMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
