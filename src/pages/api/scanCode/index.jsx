import { View, Button, Text } from '@tarojs/components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

export default function ScanCodeDemo() {
  const [scanResult, setScanResult] = useState('');

  const handleScan = () => {
    Taro.scanCode({
      success: (res) => {
        setScanResult(res.result);
        Taro.showToast({ title: '扫码成功', icon: 'success' });
      },
      fail: () => {
        Taro.showToast({ title: '扫码失败', icon: 'none' });
      }
    });
  };

  return (
    <View className='container'>
      <Button onClick={handleScan} className='btn'>
        扫码
      </Button>
      {scanResult && (
        <View className='result'>
          <Text>扫码结果: {scanResult}</Text>
        </View>
      )}
    </View>
  );
}
