import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAccountDetails } from '@kupm/features/api/users';
import { getCookie } from '@kupm/utils/cookie';

const initialState: any = {
  theme: getCookie('kupm_theme') || 'light',
  accountFirstName: '',
  accountLastName: '',
  accountEmail: '',
  editDetails: false,
  accountError: '',
};

export const fetchAccountDetails = createAsyncThunk(
  'settings/getAccountDetails',
  getAccountDetails
);

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload.theme;
    },
    toggleEditDetails: (state) => {
      state.editDetails = !state.editDetails;
    },
    showAccountError: (state, { payload }) => {
      state.accountError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccountDetails.pending, () => {});

    builder.addCase(fetchAccountDetails.fulfilled, (state, { payload }) => {
      try {
        const { data } = payload;
        state.accountFirstName = data.firstName;
        state.accountLastName = data.lastName;
        state.accountEmail = data.email;
      } catch (e) {
        console.log(e);
      }
    });

    builder.addCase(fetchAccountDetails.rejected, () => {});
  },
});

export const { changeTheme, toggleEditDetails, showAccountError } =
  settingsSlice.actions;
export default settingsSlice.reducer;
