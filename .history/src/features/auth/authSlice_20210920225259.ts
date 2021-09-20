import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  login?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  login: false,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: 'auth',
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
export const authActions = authSlice.actions;
// Selectors
export const selectIsLoggedIn = (state:) => state.auth.isLoggedIn;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
