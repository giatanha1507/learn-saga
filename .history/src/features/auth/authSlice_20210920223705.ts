import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducer: {},
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
