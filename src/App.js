  
import React, { Component } from "react";
import "./App.css";
import "./index2.css";

import FilmListing from "./components/FilmListing";
import FilmDetails from "./components/FilmDetails";
import TMDB from "./TMDB";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
  }




  handleFaveToggle = (film) => {
    let faves = this.state.faves.slice();
    const filmIndex = this.state.faves.indexOf(film);
    if (filmIndex === -1) {
      console.log(`Adding ${film.title} to faves...`);
      faves.push(film);
    } else {
      console.log(`Removing ${film.title} from faves...`);
      faves.splice(filmIndex, 1);
    }
    this.setState({ faves });
    // The above is exactly the same as this.setState({faves: faves})
  };
  handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    console.log(url);
    fetch(url).then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({ current: data });
      });
    });
  };

  render() {
    return (
      <div className="film-library">
        <FilmListing
          onFaveToggle={this.handleFaveToggle}
          onDetailsClick={this.handleDetailsClick}
          films={this.state.films}
          faves={this.state.faves}
        />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}




