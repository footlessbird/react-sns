webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");






var PostForm = function PostForm() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths,
      isAddingPost = _useSelector.isAddingPost,
      postAdded = _useSelector.postAdded;

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  console.log(imagePaths);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setText("");
  }, [postAdded === true]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (!text || !text.trim()) {
      return alert("Please write some content for your post");
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_REQUEST"],
      data: {
        content: text.trim()
      }
    });
  }, [text]);
  var onChangeText = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setText(e.target.value);
  }, []);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log(e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append("image", f);
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    style: {
      margin: "10px 0 20px"
    },
    encType: "multipart/form-data",
    onSubmit: onSubmitForm
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea, {
    maxLength: 140,
    placeholder: "Tell your story to share with Dear",
    value: text,
    onChange: onChangeText
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onClickImageUpload
  }, "Image Upload"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    style: {
      float: "right"
    },
    htmlType: "submit",
    loading: isAddingPost
  }, "Post")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, imagePaths.map(function (v) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: v,
      style: {
        display: "inline-block"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "http://localhost:3000/".concat(v),
      style: {
        width: "200px"
      },
      alt: v
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], null, "Remove")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PostForm); // import React, { useCallback, useState, useEffect, useRef } from 'react';
// import { Form, Input, Button } from 'antd';
// import { useSelector, useDispatch } from 'react-redux';
// import { ADD_POST_REQUEST, REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from '../reducers/post';
// const PostForm = () => {
//   const dispatch = useDispatch();
//   const [text, setText] = useState('');
//   const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
//   const imageInput = useRef();
//   useEffect(() => {
//     setText('');
//   }, [postAdded === true]);
//   const onSubmitForm = useCallback((e) => {
//     e.preventDefault();
//     if (!text || !text.trim()) {
//       return alert('게시글을 작성하세요.');
//     }
//     const formData = new FormData();
//     imagePaths.forEach((i) => {
//       formData.append('image', i);
//     });
//     formData.append('content', text);
//     dispatch({
//       type: ADD_POST_REQUEST,
//       data: formData,
//     });
//   }, [text, imagePaths]);
//   const onChangeText = useCallback((e) => {
//     setText(e.target.value);
//   }, []);
//   const onChangeImages = useCallback((e) => {
//     console.log(e.target.files);
//     const imageFormData = new FormData();
//     [].forEach.call(e.target.files, (f) => {
//       imageFormData.append('image', f);
//     });
//     dispatch({
//       type: UPLOAD_IMAGES_REQUEST,
//       data: imageFormData,
//     });
//   }, []);
//   const onClickImageUpload = useCallback(() => {
//     imageInput.current.click();
//   }, [imageInput.current]);
//   const onRemoveImage = useCallback(index => () => {
//     dispatch({
//       type: REMOVE_IMAGE,
//       index,
//     });
//   }, []);
//   return (
//     <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
//       <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
//       <div>
//         <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
//         <Button onClick={onClickImageUpload}>이미지 업로드</Button>
//         <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
//       </div>
//       <div>
//         {imagePaths.map((v, i) => (
//           <div key={v} style={{ display: 'inline-block' }}>
//             <img src={`http://localhost:3000/${v}`} style={{ width: '200px' }} alt={v} />
//             <div>
//               <Button onClick={onRemoveImage(i)}>제거</Button>
//             </div>
//           </div>
//          ))}
//       </div>
//     </Form>
//   );
// };
// export default PostForm;

/***/ })

})
//# sourceMappingURL=index.js.ce335168f78170b510d0.hot-update.js.map