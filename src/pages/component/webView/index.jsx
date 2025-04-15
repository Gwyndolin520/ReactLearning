import { WebView } from '@tarojs/components';
import './index.scss';

export default function WebViewDemo() {
  return (
    <WebView
      src="https://www.baidu.com/"
      className="web-view"
    />
  );
}
