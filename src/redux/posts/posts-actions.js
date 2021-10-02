import { createAction } from "@reduxjs/toolkit"

export const getAllPostsRequest = createAction("posts/getAllPostsRequest")
export const getAllPostsSuccess = createAction("posts/getAllPostsSuccess")
export const getAllPostsError = createAction("posts/getAllPostsError")

export const getOnePostRequest = createAction("posts/getOnePostRequest")
export const getOnePostSuccess = createAction("posts/getOnePostSuccess")
export const getOnePostError = createAction("posts/getOnePostError")

export const addPostRequest = createAction("posts/addPostRequest")
export const addPostSuccess = createAction("posts/addPostSuccess")
export const addPostError = createAction("posts/addPostError")

export const deletePostRequest = createAction("posts/deletePostRequest")
export const deletePostSuccess = createAction("posts/deletePostSuccess")
export const deletePostError = createAction("posts/deletePostError")

export const updatePostRequest = createAction("posts/updatePostRequest")
export const updatePostSuccess = createAction("posts/updatePostSuccess")
export const updatePostError = createAction("posts/updatePostError")

export const addCommentRequest = createAction("posts/addCommentRequest")
export const addCommentSuccess = createAction("posts/addCommentSuccess")
export const addCommentError = createAction("posts/addCommentError")

const actions = {
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
}

export default actions
