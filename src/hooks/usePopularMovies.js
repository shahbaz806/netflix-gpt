import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPopularMovies = () => {
  // Hook logic to fetch and return now playing movies
  const dispatch = useDispatch();

  const popular = useSelector((store) => store.movie.nowPopularMovie);

  const getNowPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPopularMovie(json.results));
  };

  useEffect(() => {
    !popular && getNowPopularMovie();
  }, []);
};

export default useNowPopularMovies;
