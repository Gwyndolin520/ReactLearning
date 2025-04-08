import React, { useState } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import Card from "../../components/Card/Card";
import "./index.scss";

const CardGenerator = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    name: "",
    position: "",
    company: "",
    phone: "",
    email: "",
    avatar: "",
  });

  const handleInput = (field, value) => {
    setCardInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerate = () => {
    setShowCard(true);
  };

  return (
    <View className="card-generator">
      <View className="card-generator__form">
        <View className="form-item">
          <Text>姓名</Text>
          <Input
            value={cardInfo.name}
            onInput={(e) => handleInput("name", e.detail.value)}
            placeholder="请输入姓名"
          />
        </View>
        <View className="form-item">
          <Text>职位</Text>
          <Input
            value={cardInfo.position}
            onInput={(e) => handleInput("position", e.detail.value)}
            placeholder="请输入职位"
          />
        </View>
        <View className="form-item">
          <Text>公司</Text>
          <Input
            value={cardInfo.company}
            onInput={(e) => handleInput("company", e.detail.value)}
            placeholder="请输入公司"
          />
        </View>
        <View className="form-item">
          <Text>电话</Text>
          <Input
            value={cardInfo.phone}
            onInput={(e) => handleInput("phone", e.detail.value)}
            placeholder="请输入电话"
          />
        </View>
        <View className="form-item">
          <Text>邮箱</Text>
          <Input
            value={cardInfo.email}
            onInput={(e) => handleInput("email", e.detail.value)}
            placeholder="请输入邮箱"
          />
        </View>
        <Button onClick={handleGenerate}>生成名片</Button>
      </View>

      {showCard && (
        <View className="card-preview">
          <Card userInfo={cardInfo} />
        </View>
      )}
    </View>
  );
};

export default CardGenerator;
