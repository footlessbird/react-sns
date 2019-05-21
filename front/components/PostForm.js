import React from "react";
import { Form, Input, Button } from "antd";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "arcadeKid"
      },
      content: "A very first post",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asa_Akira_2_2014.jpg/440px-Asa_Akira_2_2014.jpg"
    }
  ]
};

const PostForm = () => {
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
          {dummy.imagePaths.map((v, i) => {
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
