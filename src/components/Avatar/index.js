import React from 'react'
import PropTypes from 'prop-types'
import face1 from '../../assets/images/face-female-1.jpg'
import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'



function Avatar({//🔥🔥🔥解构出 Avatar 的四种属性状态 props 并传入函数, 注意，下面比如 <AvatarClip size={size}> 这样绑定后，🌟🌟🌟 元素的 CSS 就能直接访问到 Props 的状态！！！
		src, 
		size="48px", 		 //默认值
		status, 
		statusIconSize="8px", //默认值
		...rest 			  //其他属性
		}) {

	return (
	// 👇把其他所有 ...rest 属性交给 StyleAvatar 
	<StyleAvatar {...rest}> 
		{/* 🔥🔥用短路运算符来判断【状态圆点】是否该显示！！ */}
		{status && (<StatusIcon status={status} size={statusIconSize}></StatusIcon>)}

		{/* 头像蒙板 */}
		<AvatarClip size={size}>
			{/* 头像 */}
			{/* 在 jsx 中写 js 表达式需要用大括号 */}
			<AvatarImage src={src} alt="" />
		</AvatarClip>
	</StyleAvatar>
	)
}



/*	🔥🔥
	用来检查 props 参数是否符合要求(定义属性规范)
	key   -   属性名字
	value -   属性规范
*/
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};



export default Avatar
