import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNewProjectModal: false,
};

export const newProjectModalSlice = createSlice({
  name: 'newProjectModal',
  initialState,
  reducers: {
    showNewProjectModal: (state) => {
      state.showNewProjectModal = true;
    },

    hideNewProjectModal: (state) => {
      state.showNewProjectModal = false;
    },
  },
});

export const { showNewProjectModal, hideNewProjectModal } =
  newProjectModalSlice.actions;
export default newProjectModalSlice.reducer;
