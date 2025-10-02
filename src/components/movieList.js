import React from "react";
import MovieCart from "./movieCart";

const MovieList = ({ title, movies }) => {
  
  // Add null/undefined checks to prevent the error
  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl font-bold py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movies) => (
            <MovieCart key={movies.id} posterpath={movies.poster_path} />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
