import React, { useState, useEffect } from "react";
import MoviesList from "../component/MoviesList";
import { Title } from "../component/title";
import SearchMovie from "../component/SearchFroms";
import {SyncLoader} from 'react-spinners';
import {getMovies} from '../redux/actions/MovieAction';
import {connect} from 'react-redux';

const Home = ({movies, getIntialMovies, result, isFetching}) => {

  const [usedSearch, setUsedSearch] = useState(false);
  const [results, setResults] = useState([]);
  const _renderResults = () => {
    return (result === undefined) ? (
      <p>NO hay Resultados</p>
    ) : (
      <MoviesList movies={results} />
    );
  };
  useEffect(() => {
    if(movies.length > 0 && result !== undefined){
        setUsedSearch(true);
        setResults(movies);
      }else if (movies.length === 0 && result === undefined){
        setUsedSearch(true);
    }else{
      getIntialMovies('cosmos')
    }
  }, [movies, getIntialMovies]);


  return (
    <>
      <div className="navbar">
          <Title> Search Movies </Title>
          <SearchMovie />
      </div>
      {
        isFetching ? (<SyncLoader/>) : (
          <div className="container">
          {
          usedSearch ? (
            _renderResults()
          ) : (
            <small>Use the form to search a movie </small>
          )}
        </div>
        )
      }
    </>
  );
};

const mapDispatchToProp = (dispatch) => {
  return {
    getIntialMovies: (name) => dispatch(getMovies(name))
  }
}

export default connect((state) => {
  return state.movies
}, mapDispatchToProp)(Home);
