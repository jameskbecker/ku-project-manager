import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  isCollapsed: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
