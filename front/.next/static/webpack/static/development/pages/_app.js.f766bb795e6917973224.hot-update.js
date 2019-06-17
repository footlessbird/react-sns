webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
// import React, { useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, Avatar, Button } from "antd";
// import { logoutAction, LOG_OUT_REQUEST } from "../reducers/user";
// const UserProfile = () => {
//   const { me } = useSelector(state => state.user);
//   const dispatch = useDispatch();
//   const onLogout = useCallback(() => {
//     dispatch({
//       type: LOG_OUT_REQUEST
//     });
//   }, []);
//   return (
//     <Card
//       actions={
//         [
//           <div key="twit">Tweet<br />{me.Posts.length}</div>,
//           <div key="following">Following<br />{me.Followings.length}</div>,
//           <div key="follower">Followers<br />{me.Followers.length}</div>,
//         ]
//       }
//     >
//       <Card.Meta
//         avatar={<Avatar>{me.nickname[0]}</Avatar>}
//         title={me.nickname}
//       />
//       <Button onClick={onLogout}>Logout</Button>
//     </Card>
//   );
// };
// export default UserProfile;





var UserProfile = function UserProfile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["LOG_OUT_REQUEST"]
    });
  }, []);
  console.log(me.Posts);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    actions: [// <div key="twit">짹짹<br />{me.Posts.length}</div>,
      // <div key="following">팔로잉<br />{me.Followings.length}</div>,
      // <div key="follower">팔로워<br />{me.Followers.length}</div>,
    ]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], null, me.nickname[0]),
    title: me.nickname
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    onClick: onLogout
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=_app.js.f766bb795e6917973224.hot-update.js.map