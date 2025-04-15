import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/list.scss";

export default function Api() {
  const handleClick = (path) => {
    Taro.navigateTo({
      url: path,
    });
  };

  const apiList = [
    { title: "联系人", path: "/pages/contact/index" },
    { title: "设备", path: "/pages/device/index" },
    { title: "扫描二维码", path: "/pages/api/scanCode/index" },
    { title: "截屏功能", path: "/pages/api/screenshot/index" },
    { title: "剪贴板", path: "/pages/api/clipboard/index" },
    { title: "网络功能", path: "/pages/api/network/index" },
  ];

  return (
    <View className="api-page">
      <AtList>
        {apiList.map((item, index) => (
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
