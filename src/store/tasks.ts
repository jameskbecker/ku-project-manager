import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewTask: false,
  showAddComment: false,
  showMembers: false,
  isLoading: null,
  selectedTask: '',
  data: [],
  pageName: '',
  description: '',
  filter: '',
};

export const fetchProjectTasks = createAsyncThunk(
  'tasks/getTasks',
  async ({ projectId }: any) => {
    console.log('[STORE]', 'fetchProjectTasks');
    // 'https://kupm-api.herokuapp.com/api/tasks'
    const res = await fetch(`/local/api/projects/${projectId}/tasks`);
    return await res.json();
  }
);

export const fetchSubTasks = createAsyncThunk(
  'tasks/getSubTasks',
  async ({ taskId }: any) => {
    console.log('[STORE]', 'fetchSubTasks');
    // 'https://kupm-api.herokuapp.com/api/subtasks'
    const res = await fetch(`/local/api/tasks/${taskId}/subtasks`);
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
    toggleAddComment: (state) => {
      state.showAddComment = !state.showAddComment;
    },

    toggleMembers: (state) => {
      state.showMembers = !state.showMembers;
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
    builder.addCase(fetchProjectTasks.pending, (state) => {
      console.log('Fetching Tasks');
      state.isLoading = true;
    });

    builder.addCase(fetchProjectTasks.fulfilled, (state, { payload }) => {
      console.log('Fetched Tasks!', payload);

      // Avoid unneccesary rerenders
      if (state.data === payload.data) return;
      state.data = payload.data.tasks;
      console.log(payload);
      state.pageName = payload.data.name;
      state.description = payload.data.description;
      state.isLoading = false;
    });

    builder.addCase(fetchProjectTasks.rejected, () => {});

    // ---------------------------------------------------------------
    builder.addCase(fetchSubTasks.pending, (state) => {
      console.log('Fetching Sub Tasks');
      state.isLoading = true;
    });

    builder.addCase(fetchSubTasks.fulfilled, (state, { payload }) => {
      console.log('Fetched Tasks!', payload);

      // Avoid unneccesary rerenders
      if (state.data === payload.data.subtasks) return;
      state.data = payload.data.subtasks;
      console.log(payload);
      state.pageName = payload.data.parentName;
      state.isLoading = false;
    });

    builder.addCase(fetchSubTasks.rejected, () => {});

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

export const {
  toggleNewTask,
  toggleAddComment,
  toggleMembers,
  selectTask,
  applyFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
