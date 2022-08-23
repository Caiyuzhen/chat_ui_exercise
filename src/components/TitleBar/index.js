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
import 'styled-components/macro'//🔥🔥🔥很关键，能够使用 css`` 来更改组件样式
// import { ReactComponent as Options } from 'assets/icons/options.svg'



function TitleBar({
		animeProps, 	//✈️第三步：传入react spring 的动画属性
		style,			//✈️第三步：合并 react spring 跟组件自身的样式，避免无法修改组件样式
		onAvatarClick,  //🔥🔥记得在这里头像的点击事件参数！
		onVideoClick,	//🔥🔥记得在这里定义 video icon 的点击事件参数！
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
		//✈️第四步：合并...animeProps, ...style 两个属性！
		<StyleTitleBar style={{...animeProps, ...style}} {...rest}> 
			<Avatar 
				//🔥🔥最终的事件触发函数
				onClick={onAvatarClick} 
				src={avatarSrc} 
				status={avatarStatus}
				css={`
						cursor:pointer;
					`}
				/>
			<TitleArea>
				<Paragraph size='large'>{name}</Paragraph>
				<Paragraph type='secondary'>
					<Text>Offline</Text>
					<Text> | </Text>
					<Text>最后阅读时间: 3小时前</Text>
				</Paragraph>
			</TitleArea>
			<Actions>
				<Icon onClick={onVideoClick} icon={Call} color={theme.gray3} opacity={0.8} width={24} height={24}/>
				{/* 🔥🔥最终的事件触发函数 */}
				<Icon onClick={onVideoClick} icon={Camera} color={theme.gray3} opacity={0.8} width={24} height={24}/>
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

