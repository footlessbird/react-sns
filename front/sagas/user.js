// call은 함수를 동기적으로 호출
// fork는 함수를 비동기적으로 호출
// put은 액션 dispatch
import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

// 서버에 요청을 보냄
function loginAPI() {}

function* login() {
  try {
    yield call(loginAPI);
    yield put({ // put은 dispatch와 동일
      type: LOG_IN_SUCCESS
    });
  } catch (e) { // loginAPI 실패
    console.error(e);
    yield put({
        type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  //  talkeLatest는 LOG_IN 액션이 디스패치 될 때까지 기다렸다
  //  디스패치 됬을 때 login 제너레이터 호출
  yield takeLatest(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
