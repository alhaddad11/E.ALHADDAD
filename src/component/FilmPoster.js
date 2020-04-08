import React from "react";
const FilmPoster = ({ film }) => {
  let posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;
  return <img src={posterUrl} alt="" />;
};
export default FilmPoster;  