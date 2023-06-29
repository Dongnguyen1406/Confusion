import axios from 'axios';

// Action creator sử dụng Redux Thunk
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch({
          type: 'FETCH_POSTS_SUCCESS',
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: 'FETCH_POSTS_FAILURE',
          error: error.message
        });
      });
  };
};