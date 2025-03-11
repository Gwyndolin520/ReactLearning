// src/components/Layout.jsx
import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout as AntLayout } from "antd";
import NavBar from "./NavBar";

const { Header, Content } = AntLayout;

const Layout = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!user && location.pathname !== "/login") {
    navigate("/login", { replace: true, state: { from: location } });
    return null;
  }

  return (
    <AntLayout>
      <Header>
        <NavBar user={user} />
      </Header>
      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>
    </AntLayout>
  );
};

export default Layout;
