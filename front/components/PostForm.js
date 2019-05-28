import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { ADD_POST_REQUEST } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, isAddingPost, postAdded } = useSelector(
    state => state.post
  );
  const [text, setText] = useState("");

  useEffect(() => {
    setText("");
  }, [postAdded === true]);

  const onSubmitForm = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        text
      }
    });
  }, []);

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <Form
        style={{ marginBottom: "10px 0 20px" }}
        encType="multipart/form-data"
        onSubmit={onSubmitForm}
      >
        <Input.TextArea
          maxLength={140}
          placeholder="Tell your story to share with Dear"
          value={text}
          onChange={onChangeText}
        />
        <div>
          <input type="file" multiple hidden />
          <Button>Upload Image</Button>
          <Button
            type="primary"
            htmlType="submit"
            loading={isAddingPost}
            style={{ float: "right" }}
          >
            Post
          </Button>
        </div>
        <div>
          {imagePaths.map(v => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img
                  src={`http://localhost:3000/${v}`}
                  style={{ width: "200px" }}
                  alt={v}
                />
                <div>
                  <Button>Remove</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default PostForm;
