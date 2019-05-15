import jsonPlaceholder from '../apis/jsonPlaceholder';

//Action creator

//Using redux-thunk to handle the async fetchPosts
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch ({ type: 'FETCH_USER' payload: response.data });
};