import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNewTaskModal: false,
};

export const newTaskModalSlice = createSlice({
  name: 'newTaskModal',
  initialState,
  reducers: {
    showNewTaskModal: (state) => {
      state.showNewTaskModal = true;
    },

    hideNewTaskModal: (state) => {
      state.showNewTaskModal = false;
    },
  },
});

export const { showNewTaskModal, hideNewTaskModal } = newTaskModalSlice.actions;
export default newTaskModalSlice.reducer;
