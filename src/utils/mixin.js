// 存放一些通用的样式 js
//比如创建【圆形】、【高亮 Tab】等
import { css } from 'styled-components';//导入 css 函数
// import theme from 'theme'





//⭕️生成圆形的样式组件
//比如 Avatar 的圆形，Badge 的圆形。  在 Badge 的 style 内 circle(theme.red, '26px')
export const circle = (color, size="8px") => css`
	width: ${ size };
	height: ${ size };
	background-color: ${color};
	border-radius: 50%;
`


//✅生成高亮底 Tab 的样式组件
export const activeBar = ({barWidth='8px', shadowWidth='20px'}={}) => css`
	position: relative;
	&::before,&::after {
		display: block;
		content: '';
		position:absolute;
		height: 100%;
		left: 0;
	}
	&::before {//高亮条
		width:${ barWidth };
		background:linear-gradient(
			180deg,
			rgba(142, 197, 242, 1) 0%,
			rgba(169 142 242) 100%
		)
	}
	&::after {//扩散投影
		width:${ shadowWidth };
		background:linear-gradient(
			270deg,
			rgba(142, 197, 242, 1) 0%,
			rgba(169 142 242, 1) 100%
		);
		opacity: 0.6;
	}
`

//🎴生成 Card 样式的组件
export const card = (radius='6px', padding='20px 30px') => css`
	padding: ${ padding };
	border-radius: ${ radius };
	background-color: ${( {theme} ) => theme.white};
	box-shadow: 0px 18px 40px 0px rgba(0,0,0,0.05);
`
