import { getCookie } from '@kupm/utils/cookie';
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  theme: getCookie('kupm_theme') || 'light',
};

export const appearancePanelSlice = createSlice({
  name: 'appearancePanel',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
});

export const { changeTheme } = appearancePanelSlice.actions;
export default appearancePanelSlice.reducer;
