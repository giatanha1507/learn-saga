import { takeLatest } from 'redux-saga/effects';
import { dashboardAction } from './dashboardSlice';

export default function* dashboardSaga() {
  yield takeLatest(dashboardAction.fetchData.type);
}
