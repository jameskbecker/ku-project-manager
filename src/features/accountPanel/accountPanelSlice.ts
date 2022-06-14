import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  editDetails: false,
  accountError: '',
};

export const accountPanelSlice = createSlice({
  name: 'accountPanel',
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

export const { toggleEditDetails, showAccountError } =
  accountPanelSlice.actions;
export default accountPanelSlice.reducer;
