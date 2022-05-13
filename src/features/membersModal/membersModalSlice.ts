import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  membersModalVisible: false,
};

export const membersModalSlice = createSlice({
  name: 'membersModal',
  initialState,
  reducers: {
    showMembersModal: (state) => {
      state.membersModalVisible = true;
    },

    hideMembersModal: (state) => {
      state.membersModalVisible = false;
    },
  },
});

export const { showMembersModal, hideMembersModal } = membersModalSlice.actions;
export default membersModalSlice.reducer;
