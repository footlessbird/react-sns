import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN, LOG_OUT, loginAction, logoutAction } from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch(); // 액션을 디스패치

  /*
  리렌더링이 자주 일어나는 것을 방지하기 위해 스테이트를 잘게 쪼갤수도 있다 (최적화)
  const user = useSelector(state => state.user.user);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn); 
  */

  const { user, isLoggedIn } = useSelector(state => state.user); // user 스테이트를 가져옴 mapStateToProps 역할
  const { mainPosts } = useSelector(state => state.post);
  console.log(user);

  useEffect(() => {
    // dispatch(loginAction);
    // dispatch(logoutAction);
    
  }, []);

  return (
    <div>
      {user ? (
        <div>{user.nickname} logged in successfully</div>
      ) : (
        <div>logged out successfully</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </div>
  );
};

export default Home;
