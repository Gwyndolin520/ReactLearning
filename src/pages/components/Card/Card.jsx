import { View, Text, Image } from "@tarojs/components";
import "./card.scss";

export default function Card({ userInfo }) {
  const defaultAvatar =
    "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/images/logo.png";

  return (
    <View className="card">
      <View className="card-header">
        <Image className="avatar" src={userInfo.avatar || defaultAvatar} />
        <View className="basic-info">
          <Text className="name">{userInfo.name || "姓名"}</Text>
          <Text className="position">{userInfo.position || "职位"}</Text>
        </View>
      </View>
      <View className="card-body">
        <View className="info-item">
          <Text className="label">公司：</Text>
          <Text className="value">{userInfo.company || "公司名称"}</Text>
        </View>
        <View className="info-item">
          <Text className="label">电话：</Text>
          <Text className="value">{userInfo.phone || "联系电话"}</Text>
        </View>
        <View className="info-item">
          <Text className="label">邮箱：</Text>
          <Text className="value">{userInfo.email || "电子邮箱"}</Text>
        </View>
      </View>
    </View>
  );
}
