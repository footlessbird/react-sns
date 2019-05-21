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
  mainPosts: []
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dummy.isLoggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    encType: "multipart/form-data",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "Tell your story to share with Dear",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    multiple: true,
    hidden: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Upload Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    style: {
      float: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Post")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, dummy.imagePaths.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: v,
      style: {
        display: "inline-block"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "http://localhost:3000/" + v,
      style: {
        width: "200px"
      },
      alt: v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Remove")));
  }))), dummy.mainPosts.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
      key: +c.createdAt,
      cover: c.img && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: c.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }),
      actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        type: "retweet",
        key: "retweet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        type: "heart",
        key: "heart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        type: "message",
        key: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
        type: "ellipsis",
        key: "ellipsis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.1ffcf14c174a3984f35e.hot-update.js.map