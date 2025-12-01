import { createContext, useState } from "react";


export const MovieContext = createContext();


export const MovieProvider = ({ children }) => {
  
  const [savedMovies, setSavedMovies] = useState([]);

  
  const saveMovie = (movie) => {
    // Avoid duplicates
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
