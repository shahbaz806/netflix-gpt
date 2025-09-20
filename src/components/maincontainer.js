import React from "react";
import { useSelector } from "react-redux";
import BackGroundVideo from "./backGroundVideo";
import Videotitle from "./videoTitle";



const Maincontainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);

  if (!movies) return;

  const mainMovie = movies[2];
  // console.log(mainMovie);
  const {original_title, overview,id} = mainMovie;
  return (
    <div>
      <Videotitle title = {original_title} overview={overview}/>
      <BackGroundVideo movieId={id}/>
    </div>
  );
};

export default Maincontainer;
