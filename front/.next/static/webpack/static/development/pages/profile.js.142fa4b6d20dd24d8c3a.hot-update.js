webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var FollowList = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (_ref) {
  var header = _ref.header,
      hasMore = _ref.hasMore,
      onClickMore = _ref.onClickMore,
      data = _ref.data,
      onClickStop = _ref.onClickStop;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, header),
    loadMore: hasMore && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      style: {
        width: '100%'
      },
      onClick: onClickMore
    }, "\uB354 \uBCF4\uAE30"),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
        style: {
          marginTop: '20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
        actions: [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
          key: "stop",
          type: "stop",
          onClick: onClickStop(item.id)
        })]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        description: item.nickname
      })));
    }
  });
});
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  onClickStop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _containers_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/NicknameEditForm */ "./containers/NicknameEditForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/PostCard */ "./containers/PostCard.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");










var Profile = function Profile() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      followingList = _useSelector.followingList,
      followerList = _useSelector.followerList,
      hasMoreFollower = _useSelector.hasMoreFollower,
      hasMoreFollowing = _useSelector.hasMoreFollowing;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_USER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var onRemoveFollower = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FOLLOWER_REQUEST"],
        data: userId
      });
    };
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWINGS_REQUEST"],
      offset: followingList.length
    });
  }, [followingList.length]);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWERS_REQUEST"],
      offset: followerList.length
    });
  }, [followerList.length]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC789 \uBAA9\uB85D",
    hasMore: hasMoreFollowing,
    onClickMore: loadMoreFollowings,
    data: followingList,
    onClickStop: onUnfollow
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
    hasMore: hasMoreFollower,
    onClickMore: loadMoreFollowers,
    data: followerList,
    onClickStop: onRemoveFollower
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: +c.createdAt,
      post: c
    });
  })));
};

Profile.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var state;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = context.store.getState(); // 이 직전에 LOAD_USERS_REQUEST

            context.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWERS_REQUEST"],
              data: state.user.me && state.user.me.id
            });
            context.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOAD_FOLLOWINGS_REQUEST"],
              data: state.user.me && state.user.me.id
            });
            context.store.dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_POSTS_REQUEST"],
              data: state.user.me && state.user.me.id
            }); // 이 쯤에서 LOAD_USERS_SUCCESS 돼서 me가 생김.

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=profile.js.142fa4b6d20dd24d8c3a.hot-update.js.map