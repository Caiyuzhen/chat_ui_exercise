import styled from "styled-components";





const StyledFooter = styled.footer`
	padding: 12px 28px;
	width: 100%;
`;

 
//输入框右侧三个 icon 的容器
const IconContainer = styled.div`
	display: flex;
	align-items:center;
	/* gap:16px; */
	margin-right:-28px;
	/* 让所有的子元素的左侧都空出 16px, 效果跟 gap 类似（ & 表示父元素，* 表示所有） */
	& > *{
		margin-left: 16px;
	}
`


//Emoji Picker 浮层的样式
const StyledPopoverContent= styled.div`
	display: flex;
	/* 👇表示让所有 emoji 变为 统一的边距跟大小，比如统一尺寸为 16px 的大小 */
	& > * {
		margin: 0px 8px;
		width: 16px;
		height:16px;
	}
`






export default StyledFooter;
export { IconContainer, StyledPopoverContent }