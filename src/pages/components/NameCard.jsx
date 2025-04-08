import { View, Image } from "@tarojs/components";
import React from "react";
const NameCard = ({ cardInfo }) => {
  return (
    <View>
      <View>
        <Image
          src="https://my-bucket-621.oss-cn-beijing.aliyuncs.com/bird/bird6.jpg"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        ></Image>
      </View>

      <View>{cardInfo.name}</View>
      <View>{cardInfo.phone}</View>
    </View>
  );
};
export default NameCard;
