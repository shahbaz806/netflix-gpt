import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMoviesTrailer = () => {
  // Hook logic to fetch and return now playing movies
  const dispatch = useDispatch();
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMoviesTrailer;
