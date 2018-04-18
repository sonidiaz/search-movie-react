import React, { Component } from 'react';
import {Title} from '../component/title';
import MoviesList from '../component/MoviesList';
import SearchMovie from '../component/SearchFroms';

class Home extends Component {
    state = {
        usedSearch: false,
        results: []
      }
    
      _hundleResults = (results) => {
        this.setState({
          results,
          usedSearch: true
        })
      }
      _renderResults = () => {
        
          return this.state.results.length === 0
            ? <p>NO hay Resultados</p>
            : <MoviesList movies={this.state.results} />
        
      }
    render() {
        return (
            <div>
                 <Title> Search Movies </Title>
                    <div className="SearchForm-wrapper">
                    <SearchMovie onResults={this._hundleResults} />
                    </div>
                    {
                    this.state.usedSearch 
                        ? this._renderResults()
                        : <small>Use the form to search a movie </small>
                    }
            </div>
        );
    }
}

export default Home;