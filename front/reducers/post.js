export const initState = {
  mainPosts: []
};

const ADD_POST = "ADD_POST";
const ADD_DUMMY = "ADD_DUMMY";

const addPost = {
  type: ADD_POST
};

const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "I love you 3000",
    UserId: 1,
    User: {
      nickname: "arcadeKid"
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state // 리액트는 스테이트가 변경 다시 렌더링 ...state로 새로운 객체를 (다른 참조) 만들어줘서 다시 렌더링 될 수 있게 한다
      };
    case ADD_DUMMY:
      return {
        ...state,
        mainPosts: [...state.mainPosts, action.data]
      };
    default:
      return state;
  }
};

export default reducer;
