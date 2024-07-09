import { createSlice } from "@reduxjs/toolkit";


const albumSlice = createSlice({
    name: 'albums',
    initialState: <any>[{
        id: 0,
        title: 'init'
    }],
    reducers: {
        counter: (state) => {
            state.push({
                id: 12,
                title: '123',
                completed: true,
            })
        },
        albumList(state, action) {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                completed: false,
            })
        }
    }
})

export const { albumList, counter } = albumSlice.actions;

export const selectCount = (state:any) => state.albums?.[0]?.title

export default albumSlice.reducer

