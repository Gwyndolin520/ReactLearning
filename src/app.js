import { useLaunch } from "@tarojs/taro";
// 如果使用 NutUI
import "@nutui/nutui-react-taro/dist/style.css";
import "./app.scss";

function App({ children }) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
