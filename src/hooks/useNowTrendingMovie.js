import React from "react";
import { API_OPTION } from "../utils/constant";
import { addNowTrendingMovie } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


const useNowTrendingMovies = () => {
  const dispatch = useDispatch();
  const getNowTrendingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    console.log(json.results[0]);
    dispatch(addNowTrendingMovie(json.results));
  };

  useEffect(() => {
    getNowTrendingMovie();
  }, []);
};

export default useNowTrendingMovies;
