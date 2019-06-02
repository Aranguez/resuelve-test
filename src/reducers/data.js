import * as types from '../actions/types';

let initialState = {
  movies: [],
  filteredData: [],
  searchInput: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }
    case types.GET_MOVIE_BY_ID:
      return {
        ...state,
        movies: action.payload
      }
    case types.SEARCH:
      const filteredData = state.movies.filter(item => {
        const lcTitle = (item.title).toLowerCase();
        const lcInput = (action.payload).toLowerCase();
        return (lcTitle.indexOf(lcInput) >= 0)
      });

      return {
        ...state,
        filteredData,
        searchInput: action.payload,
      }
      
    default:
      return state
    }
  }