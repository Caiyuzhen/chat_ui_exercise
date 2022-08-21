import React from 'react'
import PropTypes from 'prop-types'
import StyleTitleBar, { Actions, TitleArea } from './style'
import Avatar from 'components/Avatar'
import Text from 'components/Text'
import Icon from 'components/Icon'
import Dropdown from 'components/Dropdown'
import { useTheme } from 'styled-components'
import Paragraph from 'components/Paragraph'
import { ReactComponent as Call } from 'assets/icons/call.svg'
import { ReactComponent as Camera } from 'assets/icons/camera.svg'
// import { ReactComponent as Options } from 'assets/icons/options.svg'



function TitleBar({
		avatarSrc,		//头像 url
		avatarStatus,   //头像状态
		name,			//用户名称
		statusText,		//状态文本
		time,
		children,
		...rest
	}) {
	
	//⚡️⚡️要在 index 内引用 theme 就需要用 useTheme 的 hook
	const theme = useTheme()

	//下拉菜单的选项
	const ItemsArr = ['个人资料', '关闭会话', '屏蔽此人']

	return (
		// 👇把其他所有 ...rest 属性交给 StyleTitleBar 
		<StyleTitleBar {...rest}> 
			<Avatar src={avatarSrc} status={avatarStatus}/>
			<TitleArea>
				<Paragraph size='large'>{name}</Paragraph>
				<Paragraph type='secondary'>
					<Text>Offline</Text>
					<Text> | </Text>
					<Text>最后阅读时间: 3小时前</Text>
				</Paragraph>
			</TitleArea>
			<Actions>
				<Icon icon={Call} color={theme.gray3} opacity={0.8} width={24} height={24}/>
				<Icon icon={Camera} color={theme.gray3} opacity={0.8} width={24} height={24}/>
				{/* ...更多icon */}
				<Dropdown align='right' content={ItemsArr}/> 
				{/* <Icon icon={Options} color={theme.gray3} opacity={0.8} width={24} height={24}/> */}
			</Actions>
		</StyleTitleBar>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
TitleBar.propTypes = {
	children: PropTypes.any
};



export default TitleBar

