import {createSlice} from '@reduxjs/toolkit';

export const openSlice = createSlice({
    name: 'open',
    initialState: {
        value: false,
    },
    reducers: {
        toggleOpen: (state) => {
            state.value = !state.value;
        },
        
    },
});
export const {toggleOpen} = openSlice.actions;

export default openSlice.reducer;