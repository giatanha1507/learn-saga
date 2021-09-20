import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  login?: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducers: {
    login(state, action: PayloadAction<string>) {},
    loginSuccess(state, action: PayloadAction<string>) {},
    loginFailed(state, action: PayloadAction<string>) {},
    logout(state) {},
  },
});
// Action
export const authActions = authSlice.actions;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
