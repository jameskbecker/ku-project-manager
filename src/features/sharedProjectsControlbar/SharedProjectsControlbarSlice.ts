import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  filter: '',
};

export const sharedProjectsControlbarSlice = createSlice({
  name: 'sharedProjectsControlbarSlice',
  initialState,
  reducers: {
    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
});

export const { applyFilter } = sharedProjectsControlbarSlice.actions;
export default sharedProjectsControlbarSlice.reducer;
