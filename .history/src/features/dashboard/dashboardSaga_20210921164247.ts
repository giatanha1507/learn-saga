import { all, call, put } from '@redux-saga/core/effects';
import citiApi from 'api/citiApi';
import studentApi from 'api/studentApi';
import { ListResponse, Student, City } from 'models';
import { takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSlice';

function* fetchStatistics() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      gender: 'male',
    }),
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      gender: 'female',
    }),
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      mark_gte: 8,
    }),
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      mark_lte: 5,
    }),
  ]);
  const statisticList = responseList.map((x) => x.pagination._totalRows);
  const [maleCount, femaleCount, highMarkCount, lowMarkCount] = statisticList;
  yield put(dashboardAction.setStatistics({ maleCount, femaleCount, highMarkCount, lowMarkCount }));
}
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
function* fetchRankingByCityList() {
  // Fetch city list
  const { data: cityList }: ListResponse<City> = yield call(citiApi.getAll);
  // Fetch ranking per cityList
  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: 'mark',
      _order: 'desc',
      city: x.code,
    })
  );
}

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
