import React from 'react'
import PropTypes from 'prop-types'
import face1 from '../../assets/images/face-female-1.jpg'
import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'



function Avatar(props) {
  return (
	<StyleAvatar>
		{/* 状态圆点 */}
		<StatusIcon></StatusIcon>
		{/* 头像蒙板 */}
		<AvatarClip>
			{/* 头像 */}
			{/* 在 jsx 中写 js 表达式需要用大括号 */}
			<AvatarImage src={face1} alt="" />
		</AvatarClip>
	</StyleAvatar>
  )
}

//用来检查props参数是否符合要求
Avatar.propTypes = {}



export default Avatar
