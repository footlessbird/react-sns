// call은 함수를 동기적으로 호출
// fork는 함수를 비동기적으로 호출
// put은 액션 dispatch
import {
  all,
  fork,
  takeLatest,
  takeEvery,
  call,
  put,
  delay
} from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios";

// 서버에 요청을 보냄
function loginAPI() {
  return axios.post("/login", loginData);
}

function* login(action) {
  try {
    yield call(loginAPI, action.data);
    yield put({
      // put은 dispatch와 동일
      type: LOG_IN_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE
    });
  }
}

function* watchLogin() {
  //  talkeLatest는 LOG_IN 액션이 디스패치 될 때까지 기다렸다
  //  디스패치 됬을 때 login 제너레이터 호출
  yield takeLatest(LOG_IN_REQUEST, login);
}

function signUpAPI(signUpData) {
  return axios.post("http://localhost:3306/api/user/", signUpData);
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data);
    // throw new Error("Sign Up Error :(");
    yield put({
      // put은 dispatch 동일
      type: SIGN_UP_SUCCESS
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e
    });
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchSignUp)]);
}
