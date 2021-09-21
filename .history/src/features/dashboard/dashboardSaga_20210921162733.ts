import { all, call, put } from '@redux-saga/core/effects';
import studentApi from 'api/studentApi';
import { ListResponse, Student } from 'models';
import { takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSlice';

function* fetchStatistics() {}
function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'desc',
  });
  yield put(dashboardAction.setHighestStudentList(data));
}
function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: 'mark',
    _order: 'asc',
  });
  yield put(dashboardAction.setLowestStudentList(data));
}
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
