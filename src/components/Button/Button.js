import React from "react";
import styled from "styled-components";

//按钮 Button 组件的 UI 样式

/*🌟🌟🌟用 props 来获取按钮属性（方法一）
	function Button(props){
		return(
			<button>
				{props.label}
			</button>
		)
	}
*/

//名字可以随便起,最终想要让它渲染成哪个 html 标签, styled-components 会随机分配类名，可以避免类名冲突
const StyledButton = styled.div`
	// 👇 下面都是按钮的样式
	/*width: ${props => props.width || "80px"}; */ //写宽度的方法一
	width: ${( {width} ) => width || "80px"};//写宽度的方法二（解构语法),有则采用 width 的宽度，没有则默认为 80px
	height: ${( {height} ) => height || "32px"};
	/* background-color: #2ed573;  //写法一：不使用主题颜色，直接写死的方式*/
	background-color:${( {theme} ) => theme.primaryColor};//写法二：使用 theme 主题中的颜色
	border-radius:12px;
	color:white;
	/* 居中 */
	text-align:center;
	line-height:${( {height} ) => height || "32px"};//高度同按钮 height
`



/*用 props 来获取按钮属性（方法二，解构赋值）
🌟🌟🌟props 可以传递事件，所以为了避免两个按钮都触发一个事件，可以用 props 的值 比如 label 来接收按钮事件*/
function Button({width, onClick, label, children}){ //{}相当于解构赋值了 props

	return(
		// 把事件定义在父容器中,通过 props 来传递 App() 所发生的点击事件
		<StyledButton width={width} onClick={onClick}>
			<button>{label}</button>
			{children}
		</StyledButton>
		//👆上面用 styled-components 来定义样式，替换了 div 标签
		//比如 width 可以自定义, 在 App.js 中可以自定义按钮宽度
	)
}





export default Button