import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addCommentModalVisible: false,
};

export const addCommentModalSlice = createSlice({
  name: 'addCommentModal',
  initialState,
  reducers: {
    showAddCommentModal: (state) => {
      state.addCommentModalVisible = true;
    },

    hideAddCommentModal: (state) => {
      state.addCommentModalVisible = false;
    },
  },
});

export const { showAddCommentModal, hideAddCommentModal } =
  addCommentModalSlice.actions;
export default addCommentModalSlice.reducer;
