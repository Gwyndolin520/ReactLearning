import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import Fans from "./profile/Fans";
import Follow from "./profile/Follow";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      {" "}
      {/* 父容器使用 Flexbox 布局 */}
      {/* nav 容器 */}
      <nav
        style={{
          backgroundColor: "#fff", // 背景色
          borderRight: "2px solid #e0e0e0", // 右边框
          padding: "20px 10px", // 内边距
          display: "flex",

          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
          marginTop: "10px",
        }}
      >
        <NavLink
          to="fans"
          style={{
            width: "3rem",
            textAlign: "center",
          }}
          activeClassName="active"
          className="nav-link"
        >
          Fans
        </NavLink>
        <NavLink
          to="follow"
          activeClassName="active"
          className="nav-link"
          style={{
            width: "3rem",
            textAlign: "center",
          }}
        >
          Follow
        </NavLink>
      </nav>
      {/* 内容区域 */}
      <div style={{ flex: 1, padding: "20px" }}>
        {" "}
        {/* 内容区域占满剩余空间 */}
        <Outlet /> {/* 子路由的内容会渲染在这里 */}
      </div>
    </div>
  );
};

export default Profile;
