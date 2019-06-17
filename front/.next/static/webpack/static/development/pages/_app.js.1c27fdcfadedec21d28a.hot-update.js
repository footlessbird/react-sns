webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"]
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    actions: [// <div key="twit">Tweet<br />{me.Posts.length}</div>,
      // <div key="following">Following<br />{me.Followings.length}</div>,
      // <div key="follower">Followers<br />{me.Followers.length}</div>,
    ]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], null, me.nickname[0]),
    title: me.nickname
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: onLogout
  }, "Logout"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile); // import { Avatar, Card, Button } from 'antd';
// import React, { useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { LOG_OUT_REQUEST } from '../reducers/user';
// const UserProfile = () => {
//   const { me } = useSelector(state => state.user);
//   const dispatch = useDispatch();
//   const onLogout = useCallback(() => {
//     dispatch({
//       type: LOG_OUT_REQUEST,
//     });
//   }, []);
//   return (
//     <Card
//       actions={[
//         <div key="twit">짹짹<br />{me.Posts.length}</div>,
//         <div key="following">팔로잉<br />{me.Followings.length}</div>,
//         <div key="follower">팔로워<br />{me.Followers.length}</div>,
//       ]}
//     >
//       <Card.Meta
//         avatar={<Avatar>{me.nickname[0]}</Avatar>}
//         title={me.nickname}
//       />
//       <Button onClick={onLogout}>로그아웃</Button>
//     </Card>
//   );
// };
// export default UserProfile;

/***/ })

})
//# sourceMappingURL=_app.js.1c27fdcfadedec21d28a.hot-update.js.map