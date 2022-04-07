import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  notifications: [],
  todo: [],
  projects: [],
};

export const fetchNotifications = createAsyncThunk(
  'tasks/getNotifications',
  async () => {
    console.log('[STORE]', 'fetchNotifications');
    const res = await fetch(`/local/api/users/userId/notifications`);
    return await res.json();
  }
);

export const fetchTodo = createAsyncThunk('tasks/getTodo', async () => {
  console.log('[STORE]', 'fetchTodo');
  const res = await fetch(`/local/api/users/userId/todo`);
  return await res.json();
});

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