import { MovableView, MovableArea, View, Text } from '@tarojs/components';
import './index.scss';

export default function MovableViewDemo() {
  return (
    <View className='container'>
      <MovableArea className='movable-area'>
        <MovableView className='movable-view' direction='all'>
          <Text>可拖拽元素</Text>
        </MovableView>
      </MovableArea>
    </View>
  );
}
