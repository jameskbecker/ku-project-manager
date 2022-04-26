import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserNotifications, getUserTodo } from '@kupm/api/users';

const initialState: any = {
  notifications: [],
  todo: [],
  projects: [],
};

export const fetchNotifications = createAsyncThunk(
  'dashboards/getNotifications',
  getUserNotifications
);

export const fetchTodo = createAsyncThunk('dashboard/getTodo', getUserTodo);

export const tasksSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CRUDL: GET actions
    builder.addCase(fetchNotifications.pending, (state) => {});

    builder.addCase(fetchNotifications.fulfilled, (state, { payload }) => {
      // Avoid unneccesary rerenders
      if (state.notifications === payload.data) return;
      state.notifications = payload.data;
    });

    builder.addCase(fetchNotifications.rejected, () => {});

    // CRUDL: GET actions
    builder.addCase(fetchTodo.pending, (state) => {});

    builder.addCase(fetchTodo.fulfilled, (state, { payload }) => {
      // Avoid unneccesary rerenders
      if (state.notifications === payload.data) return;
      state.todo = payload.data;
    });

    builder.addCase(fetchTodo.rejected, () => {});
  },
});

export const {} = tasksSlice.actions;
export default tasksSlice.reducer;
