// 存放一些通用的样式 js
//比如创建【圆形】、【高亮 Tab】等
import { css } from 'styled-components';//导入 css 函数





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
	&::before {
		width:${ barWidth };
		background:linear-gradient(
			180deg,
			rgba(142, 197, 242, 1) 0%,
			rgba(79, 157, 222, 1) 100%
		)
	}
	&::after {
		width:${ shadowWidth };
		background:linear-gradient(
			270deg,
			rgba(41, 47, 76, 1) 0%,
			rgba(142, 197, 242, 1) 100%
		);
		opacity: 0.6;
	}
`

