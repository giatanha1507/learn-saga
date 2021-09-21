import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:  = {};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    
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
