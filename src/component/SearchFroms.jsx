import React, { useState } from 'react';
import {connect} from 'react-redux';
import {getMovies} from '../redux/actions/MovieAction' 

const SearchForm = ({getMovies}) => {
	const [inputMovie, setInputMovie] = useState('');
	const _handleChange = (e) => {
		setInputMovie(e.target.value)
	}
	
	const _handleSumbit = (e) => {
		e.preventDefault();
		getMovies(inputMovie);
	}
	return (
		<div className="column is-two-fifths">
			<form onSubmit={_handleSumbit}>
				<div className="field is-grouped">
					<p className="control is-expanded">
						<input
							onChange={_handleChange}
							className="input"
							type="text"
							placeholder="Buscar Pelicula" 
						/>
					</p>
					<p className="control">
						<button className="button is-info is-fullwidth">
							Buscar
						</button>
					</p>
				</div>
			</form>
		</div>
	);
};


const mapDispatchToProps = (dispatch) => {
	return {
		getMovies: (inputMovie) => dispatch(getMovies(inputMovie))
	}
}
export default connect(null, mapDispatchToProps)(SearchForm);