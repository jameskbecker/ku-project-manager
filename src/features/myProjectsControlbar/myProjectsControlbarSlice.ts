import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  filter: '',
};

export const myProjectsControlbarSlice = createSlice({
  name: 'myProjectsControlbarSlice',
  initialState,
  reducers: {
    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
});

export const { applyFilter } = myProjectsControlbarSlice.actions;
export default myProjectsControlbarSlice.reducer;
