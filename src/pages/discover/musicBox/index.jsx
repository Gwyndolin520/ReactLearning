import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const MusicBox = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioContextRef = useRef(null);

  const songs = [
    {
      id: 1,
      name: "示例音乐1",
      url: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/music/1.mp3",
    },
    {
      id: 2,
      name: "示例音乐2",
      url: "https://qx1-oss.oss-cn-hangzhou.aliyuncs.com/music/2.mp3",
    },
  ];

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.destroy();
      }
    };
  }, []);

  const handlePlay = (song) => {
    // 如果当前有音乐在播放，先停止它
    if (audioContextRef.current) {
      audioContextRef.current.destroy();
    }

    // 创建新的音频上下文
    const audioContext = Taro.createInnerAudioContext();
    audioContextRef.current = audioContext;

    audioContext.src = song.url;
    audioContext.onPlay(() => {
      setIsPlaying(true);
      setCurrentSong(song);
    });
    audioContext.onPause(() => {
      setIsPlaying(false);
    });
    audioContext.onStop(() => {
      setIsPlaying(false);
    });
    audioContext.onEnded(() => {
      setIsPlaying(false);
      setCurrentSong(null);
    });

    audioContext.play();
  };

  const handlePause = () => {
    if (audioContextRef.current) {
      audioContextRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <View className="music-box">
      <View className="music-box__header">
        <Text className="music-box__title">音乐盒子</Text>
      </View>
      <View className="music-box__list">
        {songs.map((song) => (
          <View key={song.id} className="song-item">
            <Text>{song.name}</Text>
            <Button
              onClick={() => {
                if (currentSong?.id === song.id && isPlaying) {
                  handlePause();
                } else {
                  handlePlay(song);
                }
              }}
            >
              {currentSong?.id === song.id && isPlaying ? "暂停" : "播放"}
            </Button>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MusicBox;
