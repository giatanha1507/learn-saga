import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

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
    login(state, action: PayloadAction<string>) {
      state.login = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.login = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.login = false;
    },
    logout(state) {},
  },
});
// Action
export const authActions = authSlice.actions;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
