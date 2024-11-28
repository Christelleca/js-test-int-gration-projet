import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
    name: 'goals',
    initialState: { list: [] },
    reducers: {
        setGoals: (state, action) => {
            state.list = action.payload;
        },
    },
});

export const { setGoals } = goalsSlice.actions;
export default goalsSlice.reducer;
