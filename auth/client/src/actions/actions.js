import * as types from './types';
import axios from 'axios';

const API_URL_BASE = 'http://localhost:5000';

const API_URL_SIGNUP = `${API_URL_BASE}/signup`;

export const getJwtTockenFromServer = userInputProps => async dispatch => {
  try {
    const response = await axios.post(API_URL_SIGNUP, userInputProps);
    dispatch({
      type: types.GET_JWT_TOKEN_FROM_SERVER,
      payload: response,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
