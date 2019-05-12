import jsonPlaceholder from '../apis/jsonPlaceholder';

//Action creator

//Using redux-thunk to handle the async fetchPosts
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};