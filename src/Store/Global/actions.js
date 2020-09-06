import * as types from './actionTypes';

/**
 * export loader functions
*/

export const apiLoadingStart = () => ({type: types.API_LOADING_START});
export const apiLoadingStop = () => ({type: types.API_LOADING_STOP});