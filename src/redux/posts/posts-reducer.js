import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"
import {
  getAllPostsSuccess,
  getOnePostSuccess,
  addPostSuccess,
  deletePostSuccess,
  updatePostSuccess,
  addCommentSuccess,
  getAllPostsError,
  getOnePostError,
  addPostError,
  deletePostError,
  updatePostError,
  addCommentError,
  getAllPostsRequest,
  getOnePostRequest,
  addPostRequest,
  deletePostRequest,
  updatePostRequest,
  addCommentRequest,
} from "./posts-actions"

const initialStatePosts = []

const initialStatePost = {}

const initialStateError = null

const initialStateComments = []

const posts = createReducer(initialStatePosts, {
  [getAllPostsSuccess]: (_, { payload }) => payload,
  [addPostSuccess]: (state, { payload }) => [...state, payload],
  [deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updatePostSuccess]: (state, { payload }) => {
    const newState = [...state]
    const index = newState.findIndex((item) => item.id === payload.id)
    newState.splice(index, 1, {
      ...payload,
    })
    return [...newState]
  },
})

const post = createReducer(initialStatePost, {
  [getOnePostSuccess]: (_, { payload }) => payload,
})

const comments = createReducer(initialStateComments, {
  [getOnePostSuccess]: (_, { payload }) => payload.comments,
  [addCommentSuccess]: (state, { payload }) => [...state, payload],
})

const error = createReducer(initialStateError, {
  [getAllPostsError]: (_, { payload }) => payload,
  [getAllPostsSuccess]: () => initialStateError,

  [getOnePostError]: (_, { payload }) => payload,
  [getOnePostSuccess]: () => initialStateError,

  [addPostError]: (_, { payload }) => payload,
  [addPostSuccess]: () => initialStateError,

  [deletePostError]: () => initialStateError,
  [deletePostSuccess]: () => initialStateError,

  [updatePostError]: () => initialStateError,
  [updatePostSuccess]: () => initialStateError,

  [addCommentError]: () => initialStateError,
  [addCommentSuccess]: () => initialStateError,
})

const loading = createReducer(false, {
  [getAllPostsRequest]: () => true,
  [getAllPostsSuccess]: () => false,
  [getAllPostsError]: () => false,

  [getOnePostRequest]: () => true,
  [getOnePostSuccess]: () => false,
  [getOnePostError]: () => false,

  [addPostRequest]: () => true,
  [addPostSuccess]: () => false,
  [addPostError]: () => false,

  [deletePostRequest]: () => true,
  [deletePostSuccess]: () => false,
  [deletePostError]: () => false,

  [updatePostRequest]: () => true,
  [updatePostSuccess]: () => false,
  [updatePostError]: () => false,

  [addCommentRequest]: () => true,
  [addCommentSuccess]: () => false,
  [addCommentError]: () => false,
})

export default combineReducers({
  posts,
  post,
  loading,
  error,
  comments,
})
