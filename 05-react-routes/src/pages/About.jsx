// src/pages/About.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

const About = () => {
  const location = useLocation();
  const username = location.state?.username; // 获取从 Login 页面传递的用户名

  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>About</Title>
      {username ? <p>欢迎你，{username}!</p> : <p>欢迎访问 About 页面！</p>}
      <p>这是关于页面的内容。</p>
    </div>
  );
};

export default About;
