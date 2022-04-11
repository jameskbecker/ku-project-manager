import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../utils/cookie';

const initialState: any = {
  theme: getCookie('kupm_theme') || 'light',
  accountFirstName: '',
  accountLastName: '',
  accountEmail: '',
};

export const getAccountDetails = createAsyncThunk(
  'settings/getAccountDetails',
  async () => {
    const userId = getCookie('kupm_user_id');
    const res = await fetch(
      `https://kupm-api.herokuapp.com/api/users/${userId}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return await res.json();
  }
);

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccountDetails.pending, () => {});

    builder.addCase(getAccountDetails.fulfilled, (state, { payload }) => {
      try {
        const { data } = payload;
        state.accountFirstName = data.firstName;
        state.accountLastName = data.lastName;
        state.accountEmail = data.email;
      } catch (e) {
        console.log(e);
      }
    });

    builder.addCase(getAccountDetails.rejected, () => {});
  },
});

export const { changeTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
