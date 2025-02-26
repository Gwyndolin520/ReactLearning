import React, { useState } from "react";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "首页",
    key: "HomeOutlined",
    icon: <MailOutlined />,
  },
  {
    label: "邮箱",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "设置",
    key: "set",
    icon: <SettingOutlined />,
  },
];
const App = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      style={{ backgroundColor: "pink" }}
      items={items}
    />
  );
};
export default App;
