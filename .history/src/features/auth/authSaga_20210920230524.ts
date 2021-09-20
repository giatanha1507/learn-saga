import { fork } from '@redux-saga/core/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {}
function* handleLogout() {}
function* watchLoginFlow() {
  yield take(authActions.login.type);
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
