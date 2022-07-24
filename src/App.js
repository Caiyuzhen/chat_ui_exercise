import './App.css';
import Button from './components/Button/Button';
import useColorSwitch from './hooks/useColorSwitch';



function App() {


	//可以自定义颜色，也可以不自定义
	const [color, handleButtonClick01] = useColorSwitch();
	const [color2,handleButtonClick02] = useColorSwitch('#ff0000','#3370FF');
	console.log(color2);


	return (
		<div className="App">
			<div
			// flex布局
			style={{display: 'flex', 
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* 通过 props 来传递属性(比如label) */}
				{/* 注意！color 的值不一样，一个是固定值，另一个是状态值 */}
				<Button label='按钮' width='220px' onClick={handleButtonClick01}/>
					<p style={{ color }}>这是一段文本</p>
				<Button label='点我' onClick={handleButtonClick02}/>
					<p style={{ color:color2 }}>这是另一段文本</p>
			</div>
		</div>
	);
}

export default App;



/*
	props 静态属性，不会动态变化视图
	status 动态属性，会动态变化视图
*/
