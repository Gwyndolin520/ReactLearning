// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, message } from "antd";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const users = [
    { username: "1", password: "1" },
    { username: "user2", password: "password2" },
  ];

  const onFinish = (values) => {
    const user = users.find(
      (u) => u.username === values.username && u.password === values.password
    );

    if (user) {
      onLogin(user); // 调用父组件的登录方法
      navigate("/about"); // 跳转到 /about
    } else {
      message.error("用户名或密码错误！");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <Card title="登录" style={{ width: 300 }}>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
