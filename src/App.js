import ChatApp from 'components/ChatApp'
import './App.css';
import { ThemeProvider } from 'styled-components'
import theme from './theme';//导入颜色主题
import {BrowserRouter} from "react-router-dom"
// import Button from './components/Button/Button';
// import useColorSwitch from './hooks/useColorSwitch';



function App() {
	// //可以自定义颜色，也可以不自定义
	// const [color, handleButtonClick01] = useColorSwitch();
	// const [color2,handleButtonClick02] = useColorSwitch('#ff0000','#3370FF');
	// console.log(color2);

	return (
		/*  🔥🔥🔥🔥记得要在这里导入 theme 主题！！这样所有用 styleComponent 创建的组件的 props 都会带有这个主题，也可以挪动到 App.js 这里！*/	
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<ChatApp/>   
			</ThemeProvider>
		</BrowserRouter>
		
		// <div className="App">
		// 	<div
		// 		style={{display: 'flex', 
		// 				alignItems: 'center',
		// 				justifyContent: 'center',
		// 			}}
		// 	>
		// 		{/* 通过 props 来传递属性(比如label) */}
		// 		{/* 注意！color 的值不一样，一个是固定值，另一个是状态值 */}
		// 		{/* {/* <Button label='按钮' width='220px' onClick={handleButtonClick01}/> */}
		// 		<p style={{ color }}>这是一段文本</p>
		// 			<Button label='点我' onClick={handleButtonClick02}/>
		// 		<p style={{ color:color2 }}>这是另一段文本</p>
		// 	</div>
		// </div>	
	);
}

export default App;



/*
	props 静态属性，不会动态变化视图
	status 动态属性，会动态变化视图
*/
