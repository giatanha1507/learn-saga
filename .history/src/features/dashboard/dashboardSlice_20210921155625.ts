import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface DashboardStatistics{
    maleCount: number;
    femaleCount: number;
    highMarkCount: number;
    lowMarkCount: number;
}

export interface DashboardState{
    loading: boolean;
    statistics: DashboardStatistics;
    highStudentList: Student[];
}

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
