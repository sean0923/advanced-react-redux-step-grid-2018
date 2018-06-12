import axios from 'axios';
import * as types from './types';

export const jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/comments';

export const saveComment = comment => {
  return {
    type: types.SAVE_COMMENT,
    payload: comment,
  };
};

export const getCommentsFromJsonPlaceholder = () => {
  return {
    type: types.GET_COMMENTS_FROM_JSON_PLACEHOLDER,
    payload: axios.get(jsonPlaceholderUrl),
  };
};

export const changeAuth = (isLoggedIn) => {
  return {
    type: types.CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
