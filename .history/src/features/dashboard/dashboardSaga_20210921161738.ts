import { takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSlice';

function* fetchStatistics() {}
function* fetchHighestStudentList() {}
function* fetchLowestStudentList() {}
function* fetchRankingByCityList() {}

function* fetchDashboardData() {}

export default function* dashboardSaga() {
  yield takeLatest(dashboardAction.fetchData.type, fetchDashboardData);
}
