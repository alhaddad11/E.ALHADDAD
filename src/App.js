import React from "react";
import logo from "./logo.svg";
import "./index.css"
import FilmListing from "./component/FilmListing";
import FilmDetails from "./component/FilmDetails";
import TMDB from "./TMDB";

function App() {
  return (
    
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing  films={TMDB.films}/>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails  films={TMDB.films}/>
        </div>
      </div>
    
  );
}

export default App;
