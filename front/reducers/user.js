const dummyUser = {
  nickname: "Asa Akira",
  Post: [],
  Followings: [],
  Followers: [],
  signUpData: {}
};

export const initState = {
  isLoggedIn: false,
  user: null
};

// 액션 타입
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

//  동기요청의 경우 비동기 처럼 request -> success or failure 와 같이 기다리는 것 없이 바로 실행되는 것이라서
//  redux-saga가 필요 없다  
//  export const INCREMENT_NUMBER = 'INCREMENT_NUMBER'

// 액션에 넣을 데이터가 동적일 경우 함수로 작성
export const signUpAction = data => {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};

export const loginAction = {
  type: LOG_IN_REQUEST
};

export const logoutAction = {
  type: LOG_OUT_REQUEST
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      // console.log(action.data)
      return {
        ...state,
        isLoggedIn: true,
        // user: action.data
        user: dummyUser
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpData: action.data
      };

    default:
      return state;
  }
};

export default reducer;
