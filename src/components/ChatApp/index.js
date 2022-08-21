import React from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Content, Drawer, Nav, SidebarFeed } from './style'
import NavBar from 'components/NavBar'
import MessageList from 'components/MessageList'
import Conversation from 'components/Conversation'
import FileList from 'components/FileList'
import Profile from 'components/Profile'
import ContactList from 'components/ContactList'
import EditProfile from 'components/EditProfile'
import NoteList from 'components/NoteList'
import { Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Settings from 'components/Settings'
import BlockedList from 'components/BlockedList'




function ChatApp({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledChatApp 
		<StyledChatApp {...rest}> 
		
			{/* 左侧主导航 */}
			<Nav><NavBar/></Nav>


			{/* 🚗左侧 feed, 用 Router 来定义切换的路由 */}
			<SidebarFeed>
				{/* 🔥用 Routes 包裹 Route 只加载第一个匹配到的路由，不会加载全部匹配到的 */}
				<Routes>
					{/* exact 为精确匹配路由路径,  /  为根路径*/}
					<Route path='/' element={<MessageList/>}/>
					<Route path='/contacts'  element={<ContactList/>} />
					<Route path='/files' element={<FileList/>} />
					<Route path='/notes' element={<NoteList/>} />
					<Route path='/more' element={<EditProfile/>}/>
					<Route path='/settings' element={<EditProfile/>} />
					<Route path='/settings/blocked' element={<EditProfile/>}/>
				</Routes>
			</SidebarFeed>

			{/* 消息区域 */}
			<Content>
				<Routes>
					<Route path='/' element={<Conversation/>}/>
						<Route path='files'  element={<Conversation/>} />
						<Route path='contacts'  element={<Conversation/>} />
						<Route path='notes'  element={<Conversation/>} />
						<Route path='more'  element={<Conversation/>} />
					<Route path='/settings' element={<Settings/>}/>
					<Route path='/settings/blocked' element={<BlockedList/>}/>
				</Routes>
				
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

