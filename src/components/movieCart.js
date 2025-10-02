import React from "react";
import { IMG_URL } from "../utils/constant";

const MovieCart = ({posterpath}) => {
  if(!posterpath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_URL + posterpath} alt="movie cart" />
    </div>
  );
};

export default MovieCart;
