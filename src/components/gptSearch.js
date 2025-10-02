import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";
import {BACKGROUND_IMG} from  "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className=" ">
        <img className="fixed -z-10" alt="background-img" src={BACKGROUND_IMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
