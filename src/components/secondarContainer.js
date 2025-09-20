import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondarContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-72 pl-6 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Trending Movies "} movies={movies.nowPlayingMovie} />
        <MovieList title={"Popular "} movies={movies.nowPopularMovie} />
      </div>
    </div>
  );
};

export default SecondarContainer;
