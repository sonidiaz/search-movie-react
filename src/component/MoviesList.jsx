import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie'

class MoviesList extends Component {
    static propTypes = {
        movies: PropTypes.array,
    }
    render() {
        const {movies} = this.props;

        return(
            <div className="MoviesList">
                {
                   movies.map( peli => {
                        return (
                            <div key = {peli.imdbID} className="MoviesList-item">
																<Movie 
																		id={peli.imdbID}
                                    title = {peli.Title}
                                    year = {peli.Year}
                                    poster = {peli.Poster}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
        
    }
}

export default MoviesList;