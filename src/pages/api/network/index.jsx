import { View, Button, Text } from '@tarojs/components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

export default function NetworkDemo() {
  const [networkType, setNetworkType] = useState('');
  const [requestResult, setRequestResult] = useState('');

  const getNetworkType = () => {
    Taro.getNetworkType({
      success: (res) => {
        setNetworkType(res.networkType);
        Taro.showToast({ title: '获取网络类型成功', icon: 'none' });
      },
      fail: () => {
        Taro.showToast({ title: '获取失败', icon: 'none' });
      }
    });
  };

  const makeRequest = () => {
    Taro.request({
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      success: (res) => {
        setRequestResult(JSON.stringify(res.data, null, 2));
        Taro.showToast({ title: '请求成功', icon: 'success' });
      },
      fail: () => {
        Taro.showToast({ title: '请求失败', icon: 'none' });
      }
    });
  };

  return (
    <View className='container'>
      <Button onClick={getNetworkType} className='btn'>
        获取网络类型
      </Button>
      <Button onClick={makeRequest} className='btn'>
        发起网络请求
      </Button>

      {networkType && (
        <View className='result'>
          <Text>当前网络类型: {networkType}</Text>
        </View>
      )}

      {requestResult && (
        <View className='result'>
          <Text>请求结果: {requestResult}</Text>
        </View>
      )}
    </View>
  );
}
