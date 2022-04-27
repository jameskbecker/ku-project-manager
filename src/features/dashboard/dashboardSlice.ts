import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  notifications: [],
  todo: [],
  projects: [],
};

export const tasksSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});

export const {} = tasksSlice.actions;
export default tasksSlice.reducer;
