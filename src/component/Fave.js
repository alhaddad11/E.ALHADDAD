import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: "all",
    };
  }

  handleFilterClick(filter) {
    console.log(`Setting filter to ${filter}`);
    this.setState({
      filter: filter,
    });
  }

  render() {
    let allFilms = this.props.films.map((film, i) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          onDetailsClick={() => this.props.onDetailsClick(film)}
          isFave={this.props.faves.includes(film)}
        />
      );
    });
    let faveFilms = this.props.faves.map((film, i) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          onDetailsClick={() => this.props.onDetailsClick(film)}
          isFave={this.props.faves.includes(film)}
        />
      );
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={
              "film-list-filter " +
              (this.state.filter === "all" ? "is-active" : "")
            }
            onClick={(e) => this.handleFilterClick("all")}
          >
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div
            className={
              "film-list-filter " +
              (this.state.filter === "faves" ? "is-active" : "")
            }
            onClick={(e) => this.handleFilterClick("faves")}
          >
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
          </div>
        </div>

        {this.state.filter === "all" ? allFilms : faveFilms}
      </div>
    );
  }
}






