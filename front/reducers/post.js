export const initState = {
  mainPosts: [
    // {
    //   id: 1,
    //   User: {
    //     id: 1,
    //     nickname: "arcadeKid"
    //   },
    //   content: "A very first post",
    //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asa_Akira_2_2014.jpg/440px-Asa_Akira_2_2014.jpg",
    //   Comments: []
    // }
  ], // 화면에 보여질 포스트들
  imagePaths: [], // 미리보기 이미지 경로
  addPostError: "", // 포스트 업로드 에러
  isAddingPost: false, // 포스트 업로드 중
  postAdded: false, // 포스팅 완료
  isAddingComment: false,
  addCommentError: "",
  commentAdded: false
};

// const dummyPost = {
//   id: 2,
//   User: {
//     id: 1,
//     nickname: "arcadeKid"
//   },
//   content:
//     "타노스가 전 우주의 모든 생명체 절반을 제거하기 위해 인피니티 건틀렛을 사용한 지 3주가 흐른 후, 캐럴 댄버스는 깊은 우주에서 토니 스타크와 네뷸라를 구하고 지구로 데려온다. 이들은 브루스 배너, 스티브 로저스, 토르, 로켓, 나타샤 로마노프, 제임스 로즈 등 남아있는 어벤져스 멤버들과 만나고 타노스를 찾고 기습하기 위해 지식을 이용한다. 이들은 인피니티 스톤의 효과를 되돌리기 위해 인피니티 스톤을 되찾고 사용하는 계획을 세우지만, 타노스는 인피니티 젬을 사용하는 걸 막기 위해 이미 파괴한 이후였다. 화가 난 토르는 타노스의 목을 베어버린다.",
//   Comments: []
// };

// const dummyComment = {
//   id: 1,
//   User: {
//     id: 1,
//     nickname: "Vancouver"
//   },
//   createdAt: new Date(),
//   content: "Say my name 🔱"
// };

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

// const addPost = {
//   type: ADD_POST
// };

// const addDummy = {
//   type: ADD_DUMMY,
//   data: {
//     content: "I love you 3000",
//     UserId: 1,
//     User: {
//       nickname: "arcadeKid"
//     }
//   }
// };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGES_REQUEST:
      return {
        ...state
      };
    case UPLOAD_IMAGES_SUCCESS:
      return {
        ...state,
        imagePaths: [...state.imagePaths, action.data]
      };
    case UPLOAD_IMAGES_FAILURE:
      return {
        ...state
      };

    case REMOVE_IMAGE:
      return {
        ...state,
        imagePaths: state.imagePaths.filter((v, i) => i !== action.index)
      };
    case ADD_POST_REQUEST:
      return {
        ...state, // 리액트는 스테이트가 변경 다시 렌더링 ...state로 새로운 객체를 (다른 참조) 만들어줘서 다시 렌더링 될 수 있게 한다
        isAddingPost: true,
        addPostError: "",
        postAdded: false
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isAddingPost: false,
        mainPosts: [action.data, ...state.mainPosts],
        postAdded: true,
        imagePaths:[],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        isAddingPost: false,
        addPostError: action.error,
        postAdded: false
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state, // 리액트는 스테이트가 변경 다시 렌더링 ...state로 새로운 객체를 (다른 참조) 만들어줘서 다시 렌더링 될 수 있게 한다
        isAddingComment: true,
        addCommentError: "",
        commentAdded: false
      };
    case ADD_COMMENT_SUCCESS:
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = [...post.Comments, action.data.comment];
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        isAddingComment: false,
        mainPosts,
        commentAdded: true
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        isAddingComment: false,
        addCommentError: action.error
        // commentAdded: false
      };
    case LOAD_COMMENTS_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(
        v => v.id === action.data.postId
      );
      const post = state.mainPosts[postIndex];
      const Comments = action.data.comments;
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };
      return {
        ...state,
        mainPosts
      };
    }
    case LOAD_MAIN_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
      return {
        ...state, // 리액트는 스테이트가 변경 다시 렌더링 ...state로 새로운 객체를 (다른 참조) 만들어줘서 다시 렌더링 될 수 있게 한다
        mainPosts: []
      };
    case LOAD_MAIN_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
      return {
        ...state,
        mainPosts: action.data
      };
    case LOAD_MAIN_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
