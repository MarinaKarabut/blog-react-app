import axios from 'axios';

import {
  getAllPostsRequest,
  getAllPostsSuccess,
  getAllPostsError,
  getOnePostRequest,
  getOnePostSuccess,
  getOnePostError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
} from './posts-actions';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com/';

export const fetchPosts = () => async dispatch => {
  dispatch(getAllPostsRequest());

  try {
    const { data } = await axios.get('/posts');
    dispatch(getAllPostsSuccess(data));
  } catch (error) {
    dispatch(getAllPostsError(error.message));
  }
};

export const getOnePosts = id => async dispatch => {
  dispatch(getOnePostRequest());

  try {
    const { data } = await axios.get(`/posts/${id}/?_embed=comments`);
    dispatch(getOnePostSuccess(data));
  } catch (error) {
    dispatch(getOnePostError(error.message));
  }
};

export const addPost = body => async dispatch => {
  dispatch(addPostRequest());
  try {
    const { data } = await axios.post('/posts', body);
    dispatch(addPostSuccess(data));
  } catch (error) {
    dispatch(addPostError(error.message));
  }
};

export const deletePost = id => async dispatch => {
  dispatch(deletePostRequest());
  try {
    const { data } = await axios.delete(`/posts/${id}`);
    dispatch(deletePostSuccess(data));
  } catch (error) {
    dispatch(deletePostError(error.message));
  }
};

export const updatePost = (id, body) => async dispatch => {
  dispatch(updatePostRequest());
  try {
    const { data } = await axios.put(`/posts/${id}`, body);
    dispatch(updatePostSuccess(data));
  } catch (error) {
    dispatch(updatePostError(error.message));
  }
};

export const addComment = body => async dispatch => {
  dispatch(addCommentRequest());
  try {
    const { data } = await axios.post('/comments', body);
    dispatch(addCommentSuccess(data));
  } catch (error) {
    dispatch(addCommentError(error.message));
  }
};
