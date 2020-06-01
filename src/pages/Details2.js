import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { Title } from "../component/title";

const API_KEY = "8a29794f";
const Detail = (props) => {

  const { id } = props.match.params;
  const [movie, setMovie] = useState({})
  const [fetching, setFetching] = useState(false)

  // state = { movie: {} };

  const _fetchMovie = ({ id }) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then((res) => res.json())
    .then((movieData) => {
      setMovie(movieData);
      });
  };

  const _goBack = () => {
    window.history.back();
  }
	useEffect(() => {
    console.log(id);
    _fetchMovie({ id });
	}, [])

	const { Title, Poster, Actors, Metascore, Plot } = movie;
		return (
			<>
				<div className="navbar">
						{/* <Title> Search Movies </Title> */}
				</div>
				<div>
					<button onClick={_goBack}>Volver</button>
					<h1>{Title}</h1>
					<img src={Poster} alt={Title} />
					<h3>{Actors}</h3>
					<span>{Metascore}</span>
					<p>{Plot}</p>
				</div>
			</>
			
    );
}

// Detail.propTypes = {
// 		match: PropTypes.shape({
// 		params: PropTypes.object,
// 		isExact: PropTypes.bool,
// 		path: PropTypes.string,
// 		url: PropTypes.string,
// 	}),
// };
export default Detail;
