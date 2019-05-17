import * as types from './types';

export const getFilms = () => dispatch => {
  dispatch({
   type: types.GET_FILMS,
   payload: 'Get all films'
  })
}

export const getLocations = () => dispatch => {
  dispatch({
   type: types.GET_LOCATIONS,
   payload: 'Get all locations'
  })
}

export const getPeople = () => dispatch => {
  dispatch({
   type: types.GET_PEOPLE,
   payload: 'Get all people'
  })
}

export const getSpecies = () => dispatch => {
  dispatch({
   type: types.GET_SPECIES,
   payload: 'Get all species'
  })
}

export const getVehicles = () => dispatch => {
  dispatch({
   type: types.GET_VEHICLES,
   payload: 'Get all vehicles'
  })
}