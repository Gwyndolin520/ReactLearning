import React from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Discover = () => {
    const features = [
        { id: 1, title: "记账本", icon: "💰", path: "/pages/discover/accountBook/index" },
        { id: 2, title: "音乐盒子", icon: "🎵", path: "/pages/discover/musicBox/index" },
        { id: 3, title: "个人名片生成器", icon: "👤", path: "/pages/discover/cardGenerator/index" }
    ];

    const handleNavigate = (path) => {
        Taro.navigateTo({ url: path });
    };

    return (
        <View className="discover">
            {features.map(feature => (
                <View 
                    key={feature.id} 
                    className="discover-item"
                    onClick={() => handleNavigate(feature.path)}
                >
                    <Text className="discover-item__icon">{feature.icon}</Text>
                    <Text className="discover-item__title">{feature.title}</Text>
                </View>
            ))}
        </View>
    );
};

export default Discover;
