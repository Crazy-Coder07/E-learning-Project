/* eslint-disable react/react-in-jsx-scope */

import { useEffect } from "react";
import { useRouter } from "next/router";
import { Menu } from "antd";
import Link from "next/link";
import Head from "next/head";
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Item } = Menu;

const TopNav = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = getTitle(router.pathname);
  }, [router.pathname]);

  const getTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/login":
        return "Login";
      case "/register":
        return "Register";
      default:
        return "App";
    }
  };

  const handleClick = (e) => {
    if (e.key === "/login") {
      document.title = "Login";
    } else if (e.key === "/register") {
      document.title = "Register";
    } else {
      document.title = "App";
    }
  };

  return (
    <>
      <Head>
        <title>{getTitle(router.pathname)}</title>
      </Head>
      <Menu mode="horizontal" selectedKeys={[router.pathname]}>
        <Item key="/" onClick={handleClick} icon={<AppstoreOutlined />}>
          <Link href="/" legacyBehavior>
            <a style={{ textDecoration: "none" }}>App</a>
          </Link>
        </Item>

        <Item key="/login" onClick={handleClick} icon={<LoginOutlined />}>
          <Link href="/login" legacyBehavior>
            <a style={{ textDecoration: "none" }}>Login</a>
          </Link>
        </Item>

        <Item
          key="/register"
          onClick={handleClick}
          icon={<UserAddOutlined />}
        >
          <Link href="/register" legacyBehavior>
            <a style={{ textDecoration: "none" }}>Register</a>
          </Link>
        </Item>
      </Menu>
    </>
  );
};

export default TopNav;

