import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import authSlice from 'features/auth/authSlice';

const initialState: AuthState = {};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.login = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.login = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.login = false;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});
// Action
export const dashboard = dashboardSlice.actions;
// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogin = (state: any) => state.auth.login;
// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
