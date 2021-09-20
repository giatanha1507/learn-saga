import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducer: {},
});

export const authActions = authSlice.actions;
export default const authReducer = authSlice.reducer;
