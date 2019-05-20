import React from "react";
import Link from 'next/link'

import { Menu, Input, Button } from "antd";

const Layout = ({ children }) => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>Dear</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Link href="/signup"><Button>Sign up</Button></Link>
      {children}
    </>
  );
};

export default Layout;
