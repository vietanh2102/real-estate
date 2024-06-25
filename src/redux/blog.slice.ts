import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface BlogState {
    optionFilter: {
        type: string;
        area: number;
        location: string;
        price: [number, number];
    }
}
const initialState: BlogState = {
    optionFilter: {
        type: "",
        area: 0,
        location: "",
        price: [0, 0]
    }
}
const postsSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setTypeFilter: (state, action: PayloadAction<string>) => {
            const type = action.payload
            state.optionFilter = { ...state.optionFilter, type: type }
        },
        setLocationFilter: (state, action: PayloadAction<string>) => {
            const location = action.payload
            state.optionFilter = {
                type: "",
                area: 0,
                location: location,
                price: [0, 0]
            }
        },
        setAreaFilter: (state, action: PayloadAction<number>) => {
            const area = action.payload
            state.optionFilter = { ...state.optionFilter, area: area }
        },
        setPriceFilter: (state, action: PayloadAction<[number, number]>) => {
            const price = action.payload
            state.optionFilter = { ...state.optionFilter, price: price }
        },
        resetFilter: (state) => {
            state.optionFilter = {
                type: "",
                area: 0,
                location: "",
                price: [0, 0]
            }
        }
    }
})
export const { setAreaFilter, setLocationFilter, setPriceFilter, setTypeFilter, resetFilter } = postsSlice.actions
const blogReducer = postsSlice.reducer
export default blogReducer