import * as types from '../actions/types';

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FILMS:
      console.log(action.payload)
      return {
        movies: action.payload
      }
    default:
      return state
    }
  }