import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/list.scss";

export default function Components() {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: path,
    });
  };

  const componentsList = [
    { title: "基础组件", path: "/pages/basic/index" },
    { title: "容器组件", path: "/pages/container/index" },
    { title: "表单组件", path: "/pages/form/index" },
    { title: "定位组件", path: "/pages/location/index" },
    { title: "地图组件", path: "/pages/map/index" },
    { title: "媒体组件", path: "/pages/media/index" },
    { title: "Skyline组件", path: "/pages/skyline/index" },
    { title: "滚动视图", path: "/pages/component/scrollView/index" },
    { title: "可移动视图", path: "/pages/component/movableView/index" },
    { title: "网页视图", path: "/pages/component/webView/index" },
  ];

  return (
    <View className="components-page">
      <AtList>
        {componentsList.map((item, index) => (
          <AtListItem
            key={index}
            title={item.title}
            arrow="right"
            onClick={() => handleClick(item.path)}
          />
        ))}
      </AtList>
    </View>
  );
}
