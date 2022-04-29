import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  showNewProject: false,
  showDeleteAll: false,
  selectedProject: '',
  filter: '',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggleDeleteAll: (state) => {
      state.showDeleteAll = !state.showDeleteAll;
    },

    toggleNewProject: (state) => {
      state.showNewProject = !state.showNewProject;
    },

    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    },

    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
});

export const { toggleDeleteAll, toggleNewProject, selectProject, applyFilter } =
  projectsSlice.actions;
export default projectsSlice.reducer;
