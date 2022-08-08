import React from 'react'
import PropTypes from 'prop-types'
import StyleProfile from './style'
import Paragraph from 'components/Paragraph'
import Avatar from 'components/Avatar'
import 'styled-components/macro'//🔥🔥🔥很关键，能够使用 css`` 来更改组件样式



function Profile({
	src,	   	  //Avatar头像地址
	status,	   	  //用户状态
	statusIconSize,	//用户状态图标大小
	nickName,    	//昵称
	area,  	     //地区
	signature,   //签名
	children,
	...rest
	}) {

	return (

		// 👇把其他所有 ...rest 属性交给 StyleProfile 

		<StyleProfile {...rest}> 
			<Avatar 
				src={src} 
				status={status}
				css={`margin" 26px 0;`}
				statusIconSize={statusIconSize}
				/>
			<Paragraph size='xxlargeFont' >
				{nickName}
			</Paragraph>
			<Paragraph size='xxlargeFont' >
				{signature}
			</Paragraph>
		</StyleProfile>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Profile.propTypes = {
	children: PropTypes.any
};



export default Profile

