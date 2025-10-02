import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondarContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-72 pl-4 md:pl-6 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Trending Movies "} movies={movies.nowTrendingMovie} />
        <MovieList title={"Popular "} movies={movies.nowPopularMovie} />
        <MovieList title={"Upcoming Movie "} movies={movies.nowUpcomingMovie} />

      </div>
    </div>
  );
};

export default SecondarContainer;
