import React, { Component } from 'react';
const API_KEY = '8a29794f'
class SearchForm extends Component {
	state = {
		inputMovie: ''
	}

	_handleChange = (e) => {
		this.setState ({ inputMovie: e.target.value})
	}

	_handleSumbit = (e) => {
		e.preventDefault();
		const {inputMovie} = this.state;
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
				.then( res => res.json() )
				.then( results => {
						const { Search = [], totalResults='0' } = results;
						console.log({Search, totalResults})
							this.props.onResults(Search);
						
					}
				)
	}
    render() {
        return (
						<form onSubmit={this._handleSumbit}>
							<div className="field is-grouped">
									<p className="control is-expanded">
										<input 
											onChange={this._handleChange}
											className="input" 
											type="text" 
											placeholder="Buscar Pelicula"/>
									</p>
									<p className="control">
										<button className="button is-info">
											Buscar
										</button>
									</p>
							</div>
						</form>
        )
    }
}

export default SearchForm;






















