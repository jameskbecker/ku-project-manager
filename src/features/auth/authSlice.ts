import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postAuthLogin, postAuthRegister } from '@kupm/features/api/auth';

const initialState: any = {
  errorMessage: '',
};

export const postRegister = createAsyncThunk(
  'authentication/postRegister',
  postAuthRegister
);

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
    builder.addCase(postRegister.pending, () => {
      console.log('Logging In...');
    });

    builder.addCase(postRegister.fulfilled, (state, { payload: body }) => {
      console.log(body);
      if (!body.success) {
        state.errorMessage = body.error || '';
        return;
      }
      location.href = '/login';
    });

    builder.addCase(postRegister.rejected, (state) => {
      console.log('Error creating an account');
    });

    /** ----------------------------------------------------------------------- */
    builder.addCase(postLogin.pending, () => {
      console.log('Logging In...');
    });

    builder.addCase(postLogin.fulfilled, (state, { payload: body }) => {
      if (!body.success) {
        state.errorMessage = body.error || '';
        return;
      }

      if (!body.data.userId) {
        console.log('NO USERID');
        return;
      }
      const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT';
      document.cookie = `kupm_user_id=${body.data.userId}; expires=${expiryDate}`;
      location.href = '/';
    });

    builder.addCase(postLogin.rejected, (state) => {
      console.log('Error logging in');
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
