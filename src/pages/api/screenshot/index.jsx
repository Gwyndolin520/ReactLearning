import { View, Button, Canvas } from '@tarojs/components';
import { useCallback, useEffect } from 'react';
import Taro from '@tarojs/taro';
import './index.scss';

export default function ScreenshotDemo() {
  // 绘制需要截屏的内容到 Canvas
  const drawToCanvas = useCallback(() => {
    const ctx = Taro.createCanvasContext('screenshotCanvas');
    const { windowWidth, windowHeight } = Taro.getSystemInfoSync();

    // 1. 绘制背景（可选）
    ctx.setFillStyle('#ffffff');
    ctx.fillRect(0, 0, windowWidth, windowHeight);

    // 2. 绘制文字
    ctx.setFillStyle('#000000');
    ctx.setFontSize(18);
    ctx.fillText('这是要截屏的内容', 20, 30);

    // 3. 绘制按钮（模拟）
    ctx.setFillStyle('#07c160');
    ctx.fillRect(20, 50, 100, 40);
    ctx.setFillStyle('#ffffff');
    ctx.fillText('按钮', 50, 75);

    ctx.draw(); // 必须调用 draw 才能生效
  }, []);

  useEffect(() => {
    drawToCanvas();
  }, [drawToCanvas]);

  // 保存 Canvas 为图片
  const handleScreenshot = useCallback(() => {
    Taro.canvasToTempFilePath({
      canvasId: 'screenshotCanvas',
      success: (res) => {
        Taro.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: () => Taro.showToast({ title: '截图保存成功', icon: 'success' }),
          fail: () => Taro.showToast({ title: '截图保存失败', icon: 'none' }),
        });
      },
      fail: () => Taro.showToast({ title: '截图生成失败', icon: 'none' }),
    });
  }, []);

  return (
    <View className='container'>
      {/* 实际显示的页面内容 */}
      <View className='content'>
        <View>这是要截屏的内容</View>
        <Button className='btn'>按钮</Button>
      </View>

      {/* 隐藏的 Canvas，用于绘制截图内容 */}
      <Canvas
        canvasId='screenshotCanvas'
        style={{
          width: '100%',
          height: '200px',
          position: 'fixed',
          left: '-9999px', // 移出屏幕外
        }}
      />

      <Button onClick={handleScreenshot}>保存截图</Button>
    </View>
  );
}
