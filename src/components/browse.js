import React from "react";
import Header from "./header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovie";
import useNowPopularMovies from "../hooks/usePopularMovies";
import Maincontainer from "./maincontainer";
import SecondarContainer from "./secondarContainer";


const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <SecondarContainer/>
      
    </div>
  );
};

export default Browse;
