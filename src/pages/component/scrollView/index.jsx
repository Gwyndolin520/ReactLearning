import { ScrollView, View, Text } from '@tarojs/components';
import { useState } from 'react';
import './index.scss';

export default function ScrollViewDemo() {
  const [data, setData] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const onLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setData([...data, ...Array.from({ length: 10 }, (_, i) => `Item ${data.length + i + 1}`)]);
      setLoading(false);
    }, 1000);
  };

  return (
    <ScrollView
      className='scroll-view'
      scrollY
      refresherEnabled
      refresherTriggered={refreshing}
      onRefresherRefresh={onRefresh}
      onScrollToLower={onLoadMore}
    >
      {data.map((item, index) => (
        <View key={index} className='item'>
          <Text>{item}</Text>
        </View>
      ))}
      {loading && <View className='loading'>加载中...</View>}
    </ScrollView>
  );
}
