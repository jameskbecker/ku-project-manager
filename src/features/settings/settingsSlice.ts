import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  editDetails: false,
  accountError: '',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleEditDetails: (state) => {
      state.editDetails = !state.editDetails;
    },
    showAccountError: (state, { payload }) => {
      state.accountError = payload;
    },
  },
});

export const { toggleEditDetails, showAccountError } = settingsSlice.actions;
export default settingsSlice.reducer;
