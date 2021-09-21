import { takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSlice';

function* fetchDashboardData() {}

export default function* dashboardSaga() {
  yield takeLatest(dashboardAction.fetchData.type, fetchDashboardData);
}
