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

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
