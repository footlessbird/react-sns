import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "../components/ProfileForm";

const dummy = {
  nickname: "pikachu",
  Post: [],
  Following: [],
  Followers: [],
  isLoggedIn: false
};

const Layout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Dear</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup">
        <Button>Sign up</Button>
      </Link>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12} />
        {children}
        <Col xs={24} md={6} />
      </Row>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
