import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newTaskModalVisible: false,
};

export const newTaskModalSlice = createSlice({
  name: 'newTaskModal',
  initialState,
  reducers: {
    showNewTaskModal: (state) => {
      state.newTaskModalVisible = true;
    },

    hideNewTaskModal: (state) => {
      state.newTaskModalVisible = false;
    },
  },
});

export const { showNewTaskModal, hideNewTaskModal } = newTaskModalSlice.actions;
export default newTaskModalSlice.reducer;
