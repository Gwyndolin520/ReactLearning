// src/components/NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const NavBar = ({ user }) => {
  return (
    <Header>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink
            to="/book"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            book
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            login
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item key="5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            dashboard
          </NavLink>
        </Menu.Item>
        {user && (
          <Menu.Item key="6" style={{ color: "black", right: 0 }}>
            <UserOutlined style={{ marginRight: "8px" }} />
            {user.username}
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default NavBar;
