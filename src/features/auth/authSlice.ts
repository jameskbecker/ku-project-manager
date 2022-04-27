import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  errorMessage: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
