import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  selectedProject: '',
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    },
  },
});

export const { selectProject } = projectsSlice.actions;
export default projectsSlice.reducer;
