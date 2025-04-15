import { View, Button, Text } from '@tarojs/components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

export default function ClipboardDemo() {
  const [clipboardData, setClipboardData] = useState('');

  const getClipboardData = () => {
    Taro.getClipboardData({
      success: (res) => {
        setClipboardData(res.data);
        Taro.showToast({ title: '获取剪贴板内容成功', icon: 'none' });
      },
      fail: () => {
        Taro.showToast({ title: '获取失败', icon: 'none' });
      }
    });
  };

  const setClipboardDataToSystem = () => {
    Taro.setClipboardData({
      data: '这是来自小程序的剪贴板内容',
      success: () => {
        Taro.showToast({ title: '设置剪贴板内容成功', icon: 'success' });
      },
      fail: () => {
        Taro.showToast({ title: '设置失败', icon: 'none' });
      }
    });
  };

  return (
    <View className='container'>
      <Button onClick={getClipboardData} className='btn'>
        获取剪贴板内容
      </Button>
      <Button onClick={setClipboardDataToSystem} className='btn'>
        设置剪贴板内容
      </Button>
      {clipboardData && (
        <View className='clipboard-data'>
          <Text>剪贴板内容: {clipboardData}</Text>
        </View>
      )}
    </View>
  );
}
