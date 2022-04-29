import { getCookie } from '@kupm/utils/cookie';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  theme: getCookie('kupm_theme') || 'light',
  editDetails: false,
  accountError: '',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
    toggleEditDetails: (state) => {
      state.editDetails = !state.editDetails;
    },
    showAccountError: (state, { payload }) => {
      state.accountError = payload;
    },
  },
});

export const { changeTheme, toggleEditDetails, showAccountError } =
  settingsSlice.actions;
export default settingsSlice.reducer;
