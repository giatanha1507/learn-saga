import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'models';

export interface DashboardStatistics {
  maleCount: number;
  femaleCount: number;
  highMarkCount: number;
  lowMarkCount: number;
}

export interface RankingByCity {
  cityID: string;
  rankingList: Student[];
}

export interface DashboardState {
  loading: boolean;
  statistics: DashboardStatistics;
  highStudentList: Student[];
  lowStudentList: Student[];
  rankingByCityList: RankingByCity[];
}

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  highStudentList: [],
  lowStudentList: [],
  rankingByCityList: [],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
});
// Action
export const dashboard = dashboardSlice.actions;
// Selectors

// Reducer
const dashboardReducer = dashboardSlice.reducer;
export default dashboardReducer;
