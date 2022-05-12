import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMembersModal: false,
};

export const membersModalSlice = createSlice({
  name: 'membersModal',
  initialState,
  reducers: {
    showMembersModal: (state) => {
      state.showMembersModal = true;
    },

    hideMembersModal: (state) => {
      state.showMembersModal = false;
    },
  },
});

export const { showMembersModal, hideMembersModal } = membersModalSlice.actions;
export default membersModalSlice.reducer;
