import React from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";

const PostForm = () => {
  const { imagePaths } = useSelector(state => state.post);
  return (
    <div>
      <Form
        style={{ marginBottom: "10px 0 20px" }}
        encType="multipart/form-data"
      >
        <Input.TextArea
          maxLength={140}
          placeholder="Tell your story to share with Dear"
        />
        <div>
          <input type="file" multiple hidden />
          <Button>Upload Image</Button>
          <Button type="primary" htmlType="submit" style={{ float: "right" }}>
            Post
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img
                  src={"http://localhost:3000/" + v}
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
