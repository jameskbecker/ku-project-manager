import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewTask: false,
  isLoading: null,
  selectedTask: '',
  data: [],
  pageName: '',
  filter: '',
};

export const fetchAllTasks = createAsyncThunk(
  'tasks/getTasks',
  async ({ projectId }: any) => {
    // 'https://kupm-api.herokuapp.com/api/tasks'
    const res = await fetch(`/local/api/projects/${projectId}/tasks`);
    return await res.json();
  }
);

// Used for PUT and POST
export const saveTask = createAsyncThunk(
  'tasks/saveTask',
  async (payload: any) => {
    // 'https://kupm-api.herokuapp.com/api/tasks',
    const { id } = payload;
    const baseEndpoint = '/local/api/tasks';
    const res = await fetch(id ? `${baseEndpoint}/${id}` : baseEndpoint, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    return await res.json();
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (payload: any) => {
    console.log(payload);
    // 'https://kupm-api.herokuapp.com/api/tasks'
    const resp = await fetch(`/local/api/tasks/${payload.id}`, {
      method: 'DELETE',
    });

    return await resp.json();
  }
);

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleNewTask: (state) => {
      state.showNewTask = !state.showNewTask;
    },

    selectTask: (state, { payload }) => {
      state.selectedTask = payload;
    },

    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
  extraReducers: (builder) => {
    // CRUDL: GET actions
    builder.addCase(fetchAllTasks.pending, (state) => {
      console.log('Fetching Tasks');
      state.isLoading = true;
    });

    builder.addCase(fetchAllTasks.fulfilled, (state, { payload }) => {
      console.log('Fetched Tasks!', payload);

      // Avoid unneccesary rerenders
      if (state.data === payload.data) return;
      state.data = payload.data.tasks;
      console.log(payload);
      state.pageName = payload.data.name;
      state.isLoading = false;
    });

    builder.addCase(fetchAllTasks.rejected, () => {});

    // CRUDL: POST actions
    builder.addCase(saveTask.pending, () => {
      console.log('Creating Task...');
    });

    //Consider returning new task from API and updating here instead of refetching all
    builder.addCase(saveTask.fulfilled, () => {
      console.log('Created New Task!');
    });

    builder.addCase(saveTask.rejected, () => {});
  },
});

export const { toggleNewTask, selectTask, applyFilter } = tasksSlice.actions;
export default tasksSlice.reducer;