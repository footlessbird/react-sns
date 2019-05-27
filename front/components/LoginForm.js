import React, { useCallback } from "react";
import { Input, Button, Form } from "antd";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useInput } from "../pages/signup";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      dispatch(loginAction);
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
          <Button type="primary" htmlType="submit" loading={false}>
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
