import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
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

    selectProject: (state, { payload }) => {
      state.selectedProject = payload;
    },

    applyFilter: (state, { payload }) => {
      state.filter = payload.text;
    },
  },
});

export const { toggleDeleteAll, selectProject, applyFilter } =
  projectsSlice.actions;
export default projectsSlice.reducer;
