import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import StyledChatApp, { Content, Nav, SidebarFeed } from './style'
import NavBar from 'components/NavBar'
import MessageList from 'components/MessageList'
import Conversation from 'components/Conversation'
import FileList from 'components/FileList'
import Profile from 'components/Profile'
import ContactList from 'components/ContactList'
import EditProfile from 'components/EditProfile'
import NoteList from 'components/NoteList'
import { Routes, Route, useLocation} from 'react-router-dom';
import Settings from 'components/Settings'
import BlockedList from 'components/BlockedList'
import { useTransition, animated } from 'react-spring'




function ChatApp({children,...rest}) {


	//🔥🔥获取路由信息判断组件的卸载时机, 然后加上过渡动画
	// const {locations} = useLocation() 
	const location = useLocation() 
	// console.log('pathname:', location.pathname)//当前的路由

	//只解析第一个路由,二级页面不做动画
	const getFirstSgmtPath = (location) => location.pathname.split("/")[1];

	/*第一个 location 为监听 loading 的变化
	  第二个 location 为设置 location 对象,
      第三个 location 为返回的 path
	  transitions 为返回的路径 path 数组 name */
	const transitions = useTransition(location, {getFirstSgmtPath},{
		from: { opacity: 0, transform: 'translate3d(-100px,0px,0px)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0px,0px)' },
		leave: { opacity:0, transform:'translate3d(-100px,0px,0px)'},
	}) 



	return (
		// 👇把其他所有 ...rest 属性交给 StyledChatApp 
		<StyledChatApp {...rest}> 
		
			{/* 左侧主导航 */}
			<Nav><NavBar/></Nav>


			{/* 🚗左侧 feed, 用 Router 来定义切换的路由 */}
			<SidebarFeed>
				{/* 遍历 【transitions 数组】, 给item 设置别名为 location, styles 为动画属性*/}
				{transitions.map(({ item:location, props, key }) => (
         			 <animated.div key={key} style={props}>
						{/* 🔥用 Routes 包裹 Route 只加载第一个匹配到的路由，不会加载全部匹配到的 */}
						<Routes location={location}>
								{/* exact 为精确匹配路由路径,  /  为根路径*/}
								<Route path='/' element={<MessageList/>}/>
								<Route path='/contacts'  element={<ContactList/>} />
								<Route path='/files' element={<FileList/>} />
								<Route path='/notes' element={<NoteList/>} />
								<Route path='/more' element={<EditProfile/>}/>
								<Route path='/settings' element={<EditProfile/>} />
								<Route path='/settings/blocked' element={<EditProfile/>}/>
						</Routes>		
					</animated.div> 
				) )}   
			</SidebarFeed>

			{/* 消息区域 */}
			<Content>
				<Routes>
					<Route path='/' element={<Conversation />}/>
						<Route path='files'  element={<Conversation />} />
						<Route path='contacts'  element={<Conversation/>} />
						<Route path='notes'  element={<Conversation/>} />
						<Route path='more'  element={<Conversation/>} />
					<Route path='/settings' element={<Settings/>}/>
					<Route path='/settings/blocked' element={<BlockedList/>}/>
				</Routes>
			</Content> 

		</StyledChatApp>
	)
}






export default ChatApp

