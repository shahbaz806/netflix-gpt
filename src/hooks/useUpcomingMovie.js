import React from "react";
import { API_OPTION } from "../utils/constant";
import { addNowUpcomingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getNowUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowUpcomingMovie(json.results));
  };

  useEffect(() => {
    getNowUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;
