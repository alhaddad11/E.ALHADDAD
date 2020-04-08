import React from 'react'
import FilmRow from "./FilmRow" 
export default function FilmListing(props) {
    let allFilms = props.films.map((film, i) => {
        return <FilmRow film={film} key={film.id} />;
      });
      return <div>{allFilms}</div>;
}
