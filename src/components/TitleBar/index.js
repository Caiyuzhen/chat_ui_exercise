import React from 'react'
import PropTypes from 'prop-types'
import StyleTitleBar, { Action, Title } from './style'
import Avatar from 'components/Avatar'
import Text from 'components/Text'
import Icon from 'components/Icon'
import { ReactComponent as Replied } from 'assets/icons/replied.svg'



function TitleBar({
		avatarSrc,	//头像 url
		avatarStatus, //头像状态
		name,		//标题
		statusText,	//状态文本
		time,
		children,
		...rest
	}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleTitleBar 
		<StyleTitleBar {...rest}> 
			<Avatar src={avatarSrc} status={avatarStatus}/>
			<Title>{name}</Title>
			<Text>{statusText}{time}</Text>
			<Action>
				<Icon icon={Replied} width={16} height={16}/>
			</Action>
		</StyleTitleBar>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
TitleBar.propTypes = {
	children: PropTypes.any
};



export default TitleBar

