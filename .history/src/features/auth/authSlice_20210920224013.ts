import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducer: {
    login(state, action: PayloadAction<T>) {},
    loginSuccess(state, action: PayloadAction<T>) {},
    loginFailed(state, action: PayloadAction<T>) {},
    logout(state) {},
  },
});
// Action
export const authActions = authSlice.actions;
// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
