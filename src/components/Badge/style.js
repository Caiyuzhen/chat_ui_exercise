import styled, { css } from "styled-components";
import { circle } from "utils/mixin";


//🔥🔥不同 Badge 的变体(也是一个组件，样式组件)
const variants = {
	//⭕️⭕️形态一： 小红点的形态
	dot: css`
		position: relative;
		padding: 5px;
		&::after {//表示在小红点上方添加一个数字
			/* 当 show 属性为 true 时才显示数字 */
			display: ${( {show}) => (show ? 'block' : 'none')};
			content: "";
			${( {theme} ) => circle(theme.red,'6px' )}
			position: absolute;
			right:0;
			top:0;
		}
	`,
	//⭕️⭕️形态一： 有数量的形态（默认）
	default: css`
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		box-shadow:
			0px 18px 40px 0px rgba(0,0,0,0.04),
			0px 6px 12px 0px rgba(0,0,0,0.08);
		${( {theme} ) => circle(theme.red, '26px')}//🔥🔥调用了 circle 这个创建圆形 UI 的方法！！
		${( {showZero,count} ) => !showZero && count === 0 && `visibility: hidden`}//🔥🔥当未度数为 0 并且 showZero 属性为 false 时，隐藏 Badge,visibility: hidden 在隐藏时还会占据空间高度
	`,
}


//也是一个组件（组件）
const Count = styled.div`
	font-size: ${( { theme } ) => theme.normalFont };//默认的字体
	color: white;
`


//也是一个组件（样式组件）
const StyledBadge = styled.div`
	display: inline-block;
	${( { variant } ) => variants[variant] }//根据👆 variant 的值，去 variant 对象中查找对应的样式(dot 或者 default)
`;


export default StyledBadge;
export { Count }