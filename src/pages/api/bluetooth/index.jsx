import { View, Button, Text } from '@tarojs/components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

export default function BluetoothDemo() {
  const [devices, setDevices] = useState([]);
  const [connected, setConnected] = useState(false);

  const startBluetoothDevicesDiscovery = () => {
    Taro.startBluetoothDevicesDiscovery({
      success: () => {
        Taro.onBluetoothDeviceFound((res) => {
          setDevices(prev => [...prev, ...res.devices]);
        });
        Taro.showToast({ title: '开始搜索蓝牙设备', icon: 'none' });
      },
      fail: () => {
        Taro.showToast({ title: '搜索失败', icon: 'none' });
      }
    });
  };

  const stopBluetoothDevicesDiscovery = () => {
    Taro.stopBluetoothDevicesDiscovery({
      success: () => {
        Taro.showToast({ title: '停止搜索', icon: 'none' });
      }
    });
  };

  const connectToDevice = (deviceId) => {
    Taro.createBLEConnection({
      deviceId,
      success: () => {
        setConnected(true);
        Taro.showToast({ title: '连接成功', icon: 'success' });
      },
      fail: () => {
        Taro.showToast({ title: '连接失败', icon: 'none' });
      }
    });
  };

  return (
    <View className='container'>
      <Button onClick={startBluetoothDevicesDiscovery} className='btn'>
        搜索蓝牙设备
      </Button>
      <Button onClick={stopBluetoothDevicesDiscovery} className='btn'>
        停止搜索
      </Button>

      {devices.map((device, index) => (
        <View key={index} className='device'>
          <Text>{device.name || '未知设备'}</Text>
          <Button
            onClick={() => connectToDevice(device.deviceId)}
            disabled={connected}
          >
            连接
          </Button>
        </View>
      ))}
    </View>
  );
}
