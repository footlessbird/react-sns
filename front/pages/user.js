import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { Avatar, Card } from "antd";

import PostCard from "../components/PostCard";

const User = ({ id }) => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  const { userInfo } = useSelector(state => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
      data: id
    });
    dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: id
    });
  }, []);
  return (
    <div>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              Tweet
              <br />
              {me.Post.length}
            </div>,
            <div key="following">
              Following
              <br />
              {me.Followings.length}
            </div>,
            <div key="follower">
              Followers
              <br />
              {me.Followers.length}
            </div>
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
          />
        </Card>
      ) : null}
      {mainPosts.map(c => {
        <PostCard key={+c.createdAt} post={c} />;
      })}
    </div>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired
};

User.getInitialProps = async context => {
  console.log("user getInitialProps", context.query.id);
  return { id: parseInt(context.query.id, 10) };
};
export default User;
