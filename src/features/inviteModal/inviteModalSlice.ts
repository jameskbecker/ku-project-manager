import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  inviteModalVisible: false,
};

export const inviteModalSlice = createSlice({
  name: 'inviteModal',
  initialState,
  reducers: {
    showInviteModal: (state) => {
      state.inviteModalVisible = true;
    },

    hideInviteModal: (state) => {
      state.inviteModalVisible = false;
    },
  },
});

export const { showInviteModal, hideInviteModal } = inviteModalSlice.actions;
export default inviteModalSlice.reducer;
