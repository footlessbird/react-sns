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
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE
} from "../reducers/user";
import axios from "axios";

// 서버에 요청을 보냄
function loginAPI(loginData) {
  return axios.post("/user/login", loginData, {
    withCredentials: true
  });
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      // put은 dispatch와 동일
      type: LOG_IN_SUCCESS,
      data: result.data
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

function signupAPI(signupData) {
  return axios.post("/user/", signupData);
}

function* signup(action) {
  try {
    yield call(signupAPI, action.data);
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

function* watchSignup() {
  yield takeEvery(SIGN_UP_REQUEST, signup);
}

function logoutAPI() {
  return axios.post(
    "/user/logout",
    {},
    {
      withCredentials: true
    }
  );
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOG_OUT_SUCCESS
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_OUT_FAILURE,
      error: e
    });
  }
}

function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout);
}

function loadUserAPI() {
  return axios.get("/user/", {
    withCredentials: true
  });
}

function* loadUser() {
  try {
    const result =  yield call(loadUserAPI);
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_USER_FAILURE,
      error: e
    });
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchSignup),
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadUser)
  ]);
}
