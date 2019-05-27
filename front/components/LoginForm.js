import React, { useCallback } from "react";
import { Input, Button, Form } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../pages/signup";
import { loginAction, LOG_IN_REQUEST } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput("");
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      // dispatch(loginAction);
      dispatch({  // 액션함수를 따로 만들지 않을 수 있다 아래 타입이 스위치문  action.type에 걸림 동시에 사가에도 걸림
        type: LOG_IN_REQUEST,
        data: {
          id,
          password
        }
      });
      console.log({
        id,
        password
      });
    },
    [id, password]
  );
  return (
    <div>
      <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-id">Password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button type="primary" htmlType="submit" loading={isLoggingIn}>
            Log In
          </Button>
          <Link href="/signup">
            <a>
              <Button>Sign up</Button>
            </a>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
