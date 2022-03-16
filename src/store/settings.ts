import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  theme: 'light',
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
