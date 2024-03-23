import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './blog.slice'
import { blogApi } from './blog.service'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(blogApi.middleware)
    },
})
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch