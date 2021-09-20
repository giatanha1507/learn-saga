import { fork, take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {}
function* handleLogout() {}
function* watchLoginFlow() {
  const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
  yield fork(handleLogin, action.payload);
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}