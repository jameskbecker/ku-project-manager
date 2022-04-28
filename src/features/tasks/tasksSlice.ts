import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewTask: false,
  showAddComment: false,
  showMembers: false,
  selectedTask: '',
  filter: '',
};

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
});

export const {
  toggleNewTask,
  toggleAddComment,
  toggleMembers,
  selectTask,
  applyFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
