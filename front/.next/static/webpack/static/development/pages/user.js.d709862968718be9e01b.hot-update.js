webpackHotUpdate("static/development/pages/user.js",{

/***/ "./pages/user.js":
/*!***********************!*\
  !*** ./pages/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");











var User = function User(_ref) {
  var id = _ref.id;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      userInfo = _useSelector2.userInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOAD_USER_REQUEST"],
      data: id
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_POSTS_REQUEST"],
      data: id
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, userInfo ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    actions: [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: "twit"
    }, "Tweet", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), userInfo.Posts), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: "following"
    }, "Following", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), userInfo.Followings), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      key: "follower"
    }, "Followers", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), userInfo.Followers)]
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Card"].Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Avatar"], null, userInfo.nickname[0]),
    title: userInfo.nickname
  })) : null, mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PostCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: +c.createdAt,
      post: c
    });
  }));
};

User.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired
};

User.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("user getInitialProps", context.query.id);
            return _context.abrupt("return", {
              id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(context.query.id, 10)
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=user.js.d709862968718be9e01b.hot-update.js.map