import "react";
import { Carousel } from "antd";

const App = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/1.jpg"
        style={{ height: "500px", width: "2000px" }}
      ></img>
    </div>
    <div>
      <img
        src="https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/2.jpg"
        style={{ height: "500px", width: "2000px" }}
      ></img>
    </div>
    <div>
      <img
        src="https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/3.jpg"
        style={{ height: "500px", width: "2000px" }}
      ></img>
    </div>
  </Carousel>
);
export default App;
