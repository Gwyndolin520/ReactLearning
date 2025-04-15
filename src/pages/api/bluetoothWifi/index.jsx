import { View, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';

export default function BluetoothWifi() {
  const isSupported = Taro.getEnv() !== Taro.ENV_TYPE.WEAPP || Taro.getSystemInfoSync().platform === 'mac';

  const handleBluetooth = () => {
    if (!isSupported) {
      Taro.showToast({ title: '当前环境不支持此功能，请使用真机测试', icon: 'none' });
      return;
    }
    Taro.startBluetoothDevicesDiscovery({
      success: () => {
        Taro.showToast({ title: '蓝牙搜索开始' });
      },
      fail: (err) => {
        Taro.showToast({ title: `蓝牙搜索失败: ${err.errMsg}`, icon: 'none' });
      }
    });
  };

  const handleWifi = () => {
    if (!isSupported) {
      Taro.showToast({ title: '当前环境不支持此功能，请使用真机测试', icon: 'none' });
      return;
    }
    Taro.getConnectedWifi({
      success: () => {
        Taro.showToast({ title: '获取WiFi信息成功' });
      },
      fail: (err) => {
        Taro.showToast({ title: `获取WiFi信息失败: ${err.errMsg}`, icon: 'none' });
      }
    });
  };

  return (
    <View className='bluetooth-wifi-page'>
      <Button onClick={handleBluetooth}>蓝牙功能</Button>
      <Button onClick={handleWifi}>WiFi功能</Button>
    </View>
  );
}
