import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Avatar, Button } from "antd";
import { logoutAction, LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST
    });
  }, []);
  return (
      <Card
        // actions={[
        //   <div key="tweet">
        //     <p>Tweet</p>
        //     {me.Post.length}
        //   </div>,
        //   <div key="following">
        //     <p>Following</p>
        //     {me.Followings.length}
        //   </div>,
        //   <div key="follower">
        //     <p>Followers</p>
        //     {me.Followers.length}
        //   </div>
        // ]}
        >
        <Card.Meta
          avatar={<Avatar>{me.nickname[0]}</Avatar>}
          title={me.nickname}
        />
        <Button onClick={onLogout}>Log Out</Button>
      </Card>
  );
};

export default UserProfile;
