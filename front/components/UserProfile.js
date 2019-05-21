import React from "react";
import { Card, Avatar } from "antd";

const UserProfile = () => {
  return (
    <div>
      <Card
        actions={[
          <div key="tweet">
            <p>Tweet</p>
            {dummy.Post.length}
          </div>,
          <div key="following">
            <p>Following</p>
            {dummy.Post.length}
          </div>,
          <div key="follower">
            <p>Followers</p>
            {dummy.Post.length}
          </div>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
          title={dummy.nickname}
        />
      </Card>
    </div>
  );
};

export default UserProfile;
