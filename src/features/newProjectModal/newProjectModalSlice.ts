import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newProjectModalVisible: false,
};

export const newProjectModalSlice = createSlice({
  name: 'newProjectModal',
  initialState,
  reducers: {
    showNewProjectModal: (state) => {
      state.newProjectModalVisible = true;
    },

    hideNewProjectModal: (state) => {
      state.newProjectModalVisible = false;
    },
  },
});

export const { showNewProjectModal, hideNewProjectModal } =
  newProjectModalSlice.actions;
export default newProjectModalSlice.reducer;
