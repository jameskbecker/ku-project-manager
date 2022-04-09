import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../utils/cookie';

const initialState: any = {
  theme: getCookie('kupm_theme') || 'light',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
});

export const { changeTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
