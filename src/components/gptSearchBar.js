import React, { useRef } from "react";
import Lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import GoogleGenAIS from "../utils/openai...js";
import { API_OPTION, SAMPLE_MOVIES } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config?.Lang || "en");
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
   
    const gptQuery =
      "Act as a movie recommendation engine. Suggest  movies for the query :" +
      searchText.current.value +
      " only give me name of 5 movies, json form like the result example " +
      JSON.stringify(SAMPLE_MOVIES) +
      ".";
    try {
      const result = await GoogleGenAIS.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
      });
      const gptMovies = result.text.split(",")
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResult({ movieName: gptMovies, movieResult: tmdbResults }));
    } catch (error) {
      console.log("Error generating content:", error);
    }
  };
 
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={Lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-purple-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {Lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
