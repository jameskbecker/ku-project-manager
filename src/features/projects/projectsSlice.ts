import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  selectedProject: '',
  filter: '',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    },

    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
});

export const { selectProject, applyFilter } = projectsSlice.actions;
export default projectsSlice.reducer;
