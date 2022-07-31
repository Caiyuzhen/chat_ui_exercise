import styled, {css} from "styled-components";


//🔥🔥按钮整体外容器(⚡️⚡️⚡️⚡️⚡️这里要嵌套下面的样式！！！承上（index）启下（variants）！！)
const StyledButton = styled.button`
	//去除默认样式, 用变量判断 shape 的值
	outline: none;
	border: none;
	cursor: pointer;
	//根据按钮的颜色来设置投影的主色
	box-shadow: 0px 6px 12px rgba(0,0,0,0.1);
	
	//引用下面样式组件的变量
	${ ({shape})=> shapeVariants[shape] } 
	${ ({type})=> typeVariants[type] }
	${ ({bgColor} )=>`background-color:${bgColor}`} //根据 index 传入的 bgcolor 值来设置背景色

	
	//过渡动画
	transform: scale(1);
	transition: 0.4s;
	//& 代表上一级选择器
	&:hover{ 
		transform: scale(1.25);
		transform: translateY(-6px);
		box-shadow: 0px 8px 20px rgba(0,0,0,0.12);
	}
`;




//按钮形状变体
const shapeVariants = {
	circle: css`
		width: ${( {size} )=>size};//🔥🔥接收传入的尺寸
		height: ${( {size} )=>size};//🔥🔥接收传入的尺寸
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content:center;
	`,
	square: css`
		padding: 8px 18px;
		border-radius: 6px;
	`,
}

//颜色 type 变体
const typeVariants = {
	primary: css`
		background-color:${( {theme} )=>theme.primaryColor};
		color: white;
	`
}



export {shapeVariants}
export default StyledButton;