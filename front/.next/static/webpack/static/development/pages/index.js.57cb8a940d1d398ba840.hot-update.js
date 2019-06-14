webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom.js");

// import React, { useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import { Icon } from "antd";
// import ImagesZoom from "./ImagesZoom";
// const PostImages = ({ images }) => {
//   const [showImagesZoom, setShowImagesZoom] = useState(false);
//   const onZoom = useCallback(() => {
//     setShowImagesZoom(true);
//   }, []);
//   const onClose = useCallback(
//     () => {
//     setShowImagesZoom(false)        
//     },
//     [],
// )
//   if (images.length === 1) {
//     return (
//       <div>
//         <img src={`http://localhost:3306/${images[0].src}`} onClick={onZoom} />
//         {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
//       </div>
//     );
//   } else if (images.length === 2) {
//     return (
//       <div>
//         <div>
//           <img
//             src={`http://localhost:3306/${images[0].src}`}
//             width="50%"
//             onClick={onZoom}
//           />
//           <img
//             src={`http://localhost:3306/${images[1].src}`}
//             width="50%"
//             onClick={onZoom}
//           />
//           {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <div>
//           <img
//             src={`http://localhost:3306/${images[0].src}`}
//             width="50%"
//             onClick={onZoom}
//           />
//           <div
//             style={{
//               display: "inline-block",
//               width: "50%",
//               textAlign: "center",
//               verticalAlign: "middle"
//             }}
//             onClick={onZoom}
//           >
//             <Icon type="plus" />
//             <br />
//             {images.length - 1}
//             more images load
//           </div>
//         </div>
//         {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
//       </div>
//     );
//   }
// };
// PostImages.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       src: PropTypes.string
//     })
//   ).isRequired
// };
// export default PostImages;





var PostImages = function PostImages(_ref) {
  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showImagesZoom = _useState2[0],
      setShowImagesZoom = _useState2[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "http://localhost:3306/".concat(images[0].src),
      onClick: onZoom
    }), showImagesZoom && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onClose: onClose
    }));
  }

  if (images.length === 2) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "http://localhost:3306/".concat(images[0].src),
      width: "50%",
      onClick: onZoom
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "http://localhost:3306/".concat(images[1].src),
      width: "50%",
      onClick: onZoom
    })), showImagesZoom && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onClose: onClose
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "http://localhost:3306/".concat(images[0].src),
    width: "50%",
    onClick: onZoom
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'inline-block',
      width: '50%',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
    onClick: onZoom
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "plus"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImagesZoom && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    onClose: onClose
  }));
};

PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

/***/ })

})
//# sourceMappingURL=index.js.57cb8a940d1d398ba840.hot-update.js.map