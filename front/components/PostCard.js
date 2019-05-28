import React, { useState, useCallback, useEffect  } from "react";
import { Button, Avatar, Card, Icon, Form, Input, List, Comment } from "antd";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { commentAdded, isAddingComment } = useSelector(
    state => state.post
  );

  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev); // 댓글창이 열려있으면 닫고 닫혀있으면 열 수 있도록
  }, []);

  const onSubmitComment = useCallback(e => {
    e.preventDefault();
    if (!me) {
      return alert("Please sign in to comment");
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data:{
        postId: post.id
      }
    });
  }, [me && me.id]);

  useEffect(() => {
    return () => {
      setCommentText('')
    };
  }, [commentAdded === true])

  const onChangeCommentText = useCallback(e => {
    setCommentText(e.target.value);
  }, []);

  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img src={post.img} />}
        actions={[
          <Icon type="retweet" key="retweet" />,
          <Icon type="heart" key="heart" />,
          <Icon type="message" key="message" onClick={onToggleComment} />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
        extra={<Button>Follow</Button>}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea
                rows={4}
                value={commentText}
                onChange={onChangeCommentText}
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>
              Comment
            </Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} comments`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object
  })
};

export default PostCard;
