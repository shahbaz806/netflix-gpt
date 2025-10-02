import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptMovieSuggestion from "./gptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className=" fixed  -z-10">
          <img
            className="h-screen w-screen object-cover"
            alt="background-img"
            src={BACKGROUND_IMG}
          />
          </div >
        <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
