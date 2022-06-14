import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  isCollapsed: false,
  activePage: '',
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
  },
});

export const { toggle, setActivePage } = sidebarSlice.actions;
export default sidebarSlice.reducer;
