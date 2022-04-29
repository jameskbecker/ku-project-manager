import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showDeleteProjectsModal: false,
};

export const newProjectModalSlice = createSlice({
  name: 'deleteProjectsModal',
  initialState,
  reducers: {
    showDeleteProjectsModal: (state) => {
      state.showDeleteProjectsModal = true;
    },

    hideDeleteProjectsModal: (state) => {
      state.showDeleteProjectsModal = false;
    },
  },
});

export const { showDeleteProjectsModal, hideDeleteProjectsModal } =
  newProjectModalSlice.actions;
export default newProjectModalSlice.reducer;
