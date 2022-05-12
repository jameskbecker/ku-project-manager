import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAddCommentModal: false,
};

export const addCommentModalSlice = createSlice({
  name: 'addCommentModal',
  initialState,
  reducers: {
    showAddCommentModal: (state) => {
      state.showAddCommentModal = true;
    },

    hideAddCommentModal: (state) => {
      state.showAddCommentModal = false;
    },
  },
});

export const { showAddCommentModal, hideAddCommentModal } =
  addCommentModalSlice.actions;
export default addCommentModalSlice.reducer;
