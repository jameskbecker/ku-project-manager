import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNewProject: false,
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    toggleNewProject: (state) => {
      state.showNewProject = !state.showNewProject;
    },
  },
});

export const { toggleNewProject } = projectsSlice.actions;
export default projectsSlice.reducer;
