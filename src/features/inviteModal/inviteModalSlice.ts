import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  visible: false,
};

export const inviteModalSlice = createSlice({
  name: 'inviteModal',
  initialState,
  reducers: {
    showInviteModal: (state) => {
      state.visible = true;
    },

    hideInviteModal: (state) => {
      state.visible = false;
    },
  },
});

export const { showInviteModal, hideInviteModal } = inviteModalSlice.actions;
export default inviteModalSlice.reducer;
