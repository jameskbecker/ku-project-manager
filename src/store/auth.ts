import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postAuthLogin } from '../api/auth';

const initialState: any = {
  errorMessage: '',
};

export const postLogin = createAsyncThunk(
  'authentication/postLogin',
  postAuthLogin
);

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
  extraReducers: (builder) => {
    // CRUDL: POST actions
    builder.addCase(postLogin.pending, () => {
      console.log('Creating Project...');
    });

    //Consider returning new project from API and updating here instead of refetching all
    builder.addCase(postLogin.fulfilled, () => {
      console.log('Created New Project!');
    });

    builder.addCase(postLogin.rejected, () => {});
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
