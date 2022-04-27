import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postAuthLogin } from '@kupm/features/api/auth';

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
