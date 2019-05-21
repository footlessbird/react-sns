webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/kangsung-yun/react-sns/front/pages/index.js";


var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: "arcadeKid"
    },
    content: "A very first post",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asa_Akira_2_2014.jpg/440px-Asa_Akira_2_2014.jpg"
  }]
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, dummy.isLoggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), dummy.mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostCard, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c9f139fa23a8f0b1e384.hot-update.js.map