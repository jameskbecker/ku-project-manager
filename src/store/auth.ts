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
      console.log('Logging In...');
    });

    //Consider returning new project from API and updating here instead of refetching all
    builder.addCase(postLogin.fulfilled, (state, { payload: body }) => {
      console.log(body);
      if (!body.success) {
        state.errorMessage = body.error || '';
        return;
      }

      if (!body.userId) {
        console.log('NO USERID');
        return;
      }
      const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT';
      document.cookie = `kupm_user_id=${body.userId}; expires=${expiryDate};`;
    });

    builder.addCase(postLogin.rejected, () => {
      console.log('Error logging in');
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
