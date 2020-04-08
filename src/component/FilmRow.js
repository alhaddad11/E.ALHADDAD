import React from "react";
import FilmPoster from "./FilmPoster";
const FilmRow = ({ film }) => {
  let date = new Date(film.release_date);
  return (
    <div className="film-row">
      <FilmPoster film={film} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{date.getFullYear()}</p>
      </div>
    </div>
  );
};
export default FilmRow; 