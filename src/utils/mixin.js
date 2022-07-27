// 存放一些通用的工具
import { css } from 'styled-components';//导入 css 函数



//🌟🌟生成圆形 UI 的工具，比如 Avatar 的圆形，Badge 的圆形
//让后会用在 Badge 的 style 内 circle(theme.red, '26px')
export const circle = (color, size="8px") => css`
	width: ${ size };
	height: ${ size };
	background-color: ${color};
	border-radius: 50%;
`

