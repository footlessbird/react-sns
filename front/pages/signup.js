import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
/*
    함수 컴포넌트는 state가 바뀌면 signup.js 컴포넌트가 통째로 재실행 됨
    따라서 함수 역시 새로 생성됨
    그 함수를 전달받은 자식 컴포넌트들은 렌더링을 다시함 e.g <Form onSubmit={onSubmit}>
    자바스크립트는 함수도 객체기때문에 객체는 새로생성되면 이전객체와는 다른 객체가 됨
    그러면 의도치 않는 리렌더링이 발생됨
    그러므로 props로 넘겨주는 함수는 useCallback 필수 (자식컴포넌트에 전달하는 함수)
*/
import Head from "next/head";
import Router from "next/router";

import { Form, Input, Checkbox, Button } from "antd";

import Layout from "../components/Layout";
import { signUpAction, SIGN_UP_REQUEST } from "../reducers/user";

//  custom hook
export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  //   const [id, setId] = useState("");
  //   const [nick, setNick] = useState("");
  //   const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput("");
  const [nick, onChangeNick] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch();
  const { isSigningUp, me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      alert(`Login succeeded, we're going to the main page`)
      Router.push("/");
    }
  }, [me && me.id]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordConfirm) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      // dispatch(signUpAction({
      //   id,
      //   password,
      //   nick
      // }))
      return dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          userId: id,
          password,
          nickname:nick
        }
      });

      console.log({
        id,
        nick,
        password,
        passwordConfirm,
        term
      });
      // useCallback을 쓸 땐 함수 내부에서 쓰는 state를 dependency 배열에 넣어준다
      // [password, passwordConfirm, term]
    },
    [id, nick, password, passwordConfirm, term]
  );

  /*
  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  */

  const onChangePasswordConfirm = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordConfirm(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <div>
      <h1>Sign up</h1>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <Input
            type="text"
            name="user-id"
            value={id}
            required
            onChange={onChangeId}
          />
        </div>
        <div>
          <label htmlFor="user-nick">Nick Name</label>
          <Input
            name="user-nick"
            value={nick}
            required
            onChange={onChangeNick}
          />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <Input
            name="user-password"
            type="password"
            required
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="user-password-confirm">Password Confirm</label>
          <Input
            name="user-password-confirm"
            type="password"
            required
            onChange={onChangePasswordConfirm}
            value={passwordConfirm}
          />
          {passwordError && (
            <div style={{ color: "red" }}>Password should match</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" onChange={onChangeTerm} value={term}>
            I agree with the term
          </Checkbox>
          {termError && (
            <div style={{ color: "red" }}>
              Please check the box 'I agree with the term'
            </div>
          )}
        </div>
        <div>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            Done
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
