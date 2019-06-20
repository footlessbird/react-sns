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
  const { userInfo } = useSelector(state => state.user);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_USER_REQUEST,
  //     data: id
  //   });
  //   dispatch({
  //     type: LOAD_USER_POSTS_REQUEST,
  //     data: id
  //   });
  // }, []);
  return (
    <div>
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              Tweet
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              Following
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              Followers
              <br />
              {userInfo.Followers}
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
        return <PostCard key={+c.createdAt} post={c} />;
      })}
    </div>
  );
};

// User.propTypes = {
//   id: PropTypes.number.isRequired
// };

User.getInitialProps = async context => {
  const id = parseInt(context.query.id, 10)
  console.log("user getInitialProps", id);
  contex.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: id
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: id
  });
  return { id };
};
export default User;
