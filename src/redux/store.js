import { configureStore } from "@reduxjs/toolkit"

import postsReducer from "./posts/posts-reducer"

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export default store
