import { createSlice } from "@reduxjs/toolkit"

interface BlogState {
    id: string
}
const initialState: BlogState = {
    id: ''
}
const postsSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
    }
})
const blogReducer = postsSlice.reducer
export default blogReducer