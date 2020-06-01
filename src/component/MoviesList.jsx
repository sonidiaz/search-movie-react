import React from "react";
import { connect } from "react-redux";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <div className="columnsMovies">
      {movies.map((peli) => {
        return (
          <div key={peli.imdbID} className="MoviesList-item">
            <Movie
              id={peli.imdbID}
              title={peli.Title}
              year={peli.Year}
              poster={peli.Poster}
            />
          </div>
        );
      })}
    </div>
  );
};

export default connect((state) => {
  return state.movies;
})(MoviesList);
