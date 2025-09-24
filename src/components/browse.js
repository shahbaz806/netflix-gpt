import React from "react";
import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovie";
import useNowTrendingMovies from "../hooks/useNowTrendingMovie";
import Maincontainer from "./maincontainer";
import SecondarContainer from "./secondarContainer";
import GptSearch from "./gptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useNowPopularMovies();
  useUpcomingMovies();
  useNowTrendingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />
          <SecondarContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
