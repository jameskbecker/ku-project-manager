import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deleteProjectsModalVisible: false,
};

export const newProjectModalSlice = createSlice({
  name: 'deleteProjectsModal',
  initialState,
  reducers: {
    showDeleteProjectsModal: (state) => {
      state.deleteProjectsModalVisible = true;
    },

    hideDeleteProjectsModal: (state) => {
      state.deleteProjectsModalVisible = false;
    },
  },
});

export const { showDeleteProjectsModal, hideDeleteProjectsModal } =
  newProjectModalSlice.actions;
export default newProjectModalSlice.reducer;
