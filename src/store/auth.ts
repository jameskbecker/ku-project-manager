import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../utils/cookie';

const initialState: any = {
  errorMessage: '',
};

export const postLogin = createAsyncThunk(
  'authentication/postLogin',
  async (payload: any) => {
    const { email, password } = payload;
    const res = await fetch('https://kupm-api.herokuapp.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    return await res.json();
  }
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
