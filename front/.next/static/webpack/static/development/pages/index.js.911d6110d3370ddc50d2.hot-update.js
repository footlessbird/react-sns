webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/kangsung-yun/react-sns/front/components/PostCard.js";



var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: +post.createdAt,
    cover: post.img && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: c.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }),
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "retweet",
      key: "retweet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "heart",
      key: "heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "message",
      key: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      type: "ellipsis",
      key: "ellipsis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })],
    extra: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Follow"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, c.User.nickname[0]),
    title: c.User.nickname,
    description: c.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ })

})
//# sourceMappingURL=index.js.911d6110d3370ddc50d2.hot-update.js.map