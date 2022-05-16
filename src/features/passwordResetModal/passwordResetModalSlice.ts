import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  passwordResetModalVisible: false,
};

export const passwordModalSlice = createSlice({
  name: 'passwordResetModal',
  initialState,
  reducers: {
    showPasswordResetModal: (state) => {
      state.passwordResetModalVisible = true;
    },

    hidePasswordResetModal: (state) => {
      state.passwordResetModalVisible = false;
    },
  },
});

export const { showPasswordResetModal, hidePasswordResetModal } =
  passwordModalSlice.actions;
export default passwordModalSlice.reducer;
