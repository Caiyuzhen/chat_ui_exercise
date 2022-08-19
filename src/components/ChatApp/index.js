import React from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Content, Drawer, Nav, SidebarFeed } from './style'
import NavBar from 'components/NavBar'
import MessageList from 'components/MessageList'
import Conversation from 'components/Conversation'
import Profile from 'components/Profile'



function ChatApp({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledChatApp 
		<StyledChatApp {...rest}> 
			{/* 左侧主导航 */}
			<Nav>
				<NavBar/>
			</Nav>
			{/* 左侧 feed */}
			<SidebarFeed>
				<MessageList/>
			</SidebarFeed>
			{/* 消息区域 */}
			<Content>
				<Conversation/>
			</Content> 
			{/* 侧边抽屉 */}
			<Drawer>
				<Profile/>
			</Drawer>
		</StyledChatApp>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
ChatApp.propTypes = {
	children: PropTypes.any
};



export default ChatApp

