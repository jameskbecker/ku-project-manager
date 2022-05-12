import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  selectedTask: '',
  filter: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    selectTask: (state, { payload }) => {
      state.selectedTask = payload;
    },

    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
});

export const { selectTask, applyFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
