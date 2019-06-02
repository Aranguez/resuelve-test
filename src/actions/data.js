import * as types from './types';

/**
 * @description Fetch and returns all films
 */
export const getMovies = () => dispatch => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(movies => {
      let moviesArr = [];
      movies.forEach(movie => {
        moviesArr.push({
          ...movie,
          img: `/assets/img/posters/${movie.title}.jpg`,
        });
      })

      return dispatch({
        type: types.GET_MOVIES,
        payload: moviesArr
       })
    });
}

/**
 * @description Fetch and returns a film
 * @param id
 */
export const getMovieById = (id) => dispatch => {
  return fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(res => res.json())
    .then(movie => {
      return dispatch({
        type: types.GET_MOVIE_BY_ID,
        payload: movie
      })
    });
}

/**
 * @description Search Films based in the input field
 * @param input
 */
export const search = (input) => dispatch => {
  return dispatch({
    type: types.SEARCH,
    payload: input
  })
}