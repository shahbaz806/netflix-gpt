import React from "react";
import Lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector(store=> store.config.Lang)
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={Lang[langkey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-purple-600 text-white rounded-lg">
          {Lang[langkey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
