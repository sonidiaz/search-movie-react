
export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';
const API_KEY = '8a29794f'

export const getMovies = (inputMovie) => (dispatch) => {
  dispatch({type: FETCH_MOVIE_REQUEST})
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
			.then(res => res.json())
			.then(results => {
        console.log(results);
				const { Search = [] } = results;
        dispatch({
          type: FETCH_MOVIE_SUCCESS,
          payload: {
            Search,
            results: results.totalResults
          }
        })
			}
		).catch( (error) => {
      dispatch({
        type: FETCH_MOVIE_ERROR,
        payload:{
          error: error.toString()
        }
      })
    })
}