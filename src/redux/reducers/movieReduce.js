
import {FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR} from '../actions/MovieAction'
const initialState = {
  movies: [],
  isFetching: false,
  result: null,
  error: null
}

const movies = (state=initialState, action) => {

  switch (action.type) {
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
      case FETCH_MOVIE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          movies: action.payload.Search,
          result: action.payload.results
        }
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default movies;