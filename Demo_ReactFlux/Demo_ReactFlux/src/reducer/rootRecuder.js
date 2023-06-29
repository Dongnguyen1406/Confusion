const initialState = {
    posts: [],
    isLoading: false,
    error: null
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          isLoading: false,
          error: null
        };
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default rootReducer;