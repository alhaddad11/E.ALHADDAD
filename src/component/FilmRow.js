import React from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

const FilmRow = (props) => {
  const { film } = props;
  let date = new Date(film.release_date);
  return (
    <div className="film-row" onClick={() => props.onDetailsClick()}>
      <FilmPoster film={film} />

      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{date.getFullYear()}</p>
      </div>
      <Fave
        onFaveToggle={() => props.onFaveToggle(film)}
        isFave={props.isFave}
      />
    </div>
  );
};

export default FilmRow;