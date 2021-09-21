import { takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSlice';
import {} from 'redux-saga';

function* fetchStatistics() {}
function* fetchHighestStudentList() {}
function* fetchLowestStudentList() {}
function* fetchRankingByCityList() {}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ]);
  } catch (error) {
    console.log('Fetch Fail', error);
  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardAction.fetchData.type, fetchDashboardData);
}
