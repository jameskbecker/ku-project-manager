import {
  deleteTaskRequest,
  getSubTasks,
  postTask,
} from '@kupm/features/api/tasks';
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

// export const fetchProjectTasks = createAsyncThunk(
//   'tasks/getTasks',
//   getProjectTasks
// );

export const fetchSubTasks = createAsyncThunk('tasks/getSubTasks', getSubTasks);

// Used for PUT and POST
// export const saveTask = createAsyncThunk('tasks/saveTask', postTask);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  deleteTaskRequest
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
    // builder.addCase(fetchProjectTasks.pending, (state) => {
    //   console.log('Fetching Tasks');
    //   state.isLoading = true;
    // });

    // builder.addCase(fetchProjectTasks.fulfilled, (state, { payload }) => {
    //   console.log('Fetched Tasks!', payload);

    //   // Avoid unneccesary rerenders
    //   if (state.data === payload.data) return;
    //   state.data = payload.data.tasks;
    //   state.pageName = payload.data.name;
    //   state.description = payload.data.description;
    //   state.isLoading = false;
    // });

    // builder.addCase(fetchProjectTasks.rejected, () => {});

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
      state.pageName = payload.data.parentName;
      state.description = payload.data.description || '';
      state.isLoading = false;
    });

    builder.addCase(fetchSubTasks.rejected, () => {});

    // CRUDL: POST actions
    // builder.addCase(saveTask.pending, () => {
    //   console.log('Creating Task...');
    // });

    // //Consider returning new task from API and updating here instead of refetching all
    // builder.addCase(saveTask.fulfilled, () => {
    //   console.log('Created New Task!');
    // });

    // builder.addCase(saveTask.rejected, () => {});
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
