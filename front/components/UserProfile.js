import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar, Button } from "antd";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const onLogout = useCallback(() => {
    dispatch(logoutAction);
  }, []);
  return (
      <Card
        actions={[
          <div key="tweet">
            <p>Tweet</p>
            {user.Post.length}
          </div>,
          <div key="following">
            <p>Following</p>
            {user.Followings.length}
          </div>,
          <div key="follower">
            <p>Followers</p>
            {user.Followers.length}
          </div>
        ]}
        >
        <Card.Meta
          avatar={<Avatar>{user.nickname[0]}</Avatar>}
          title={user.nickname}
        />
        <Button onClick={onLogout}>Log Out</Button>
      </Card>
  );
};

export default UserProfile;
