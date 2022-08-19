import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from 'styled-components'
// import theme from './theme';//导入颜色主题🌟




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	{/* 🔥🔥🔥🔥记得要在这里导入 theme 主题！！
		这样所有用 styleComponent 创建的组件的 props 都会带有这个主题
		也可以挪动到 App.js 内
	 */}
		<App />	
  </React.StrictMode>
);

reportWebVitals();
