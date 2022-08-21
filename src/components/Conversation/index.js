import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import StyleConversation, { ConversationContainer, MyChatBubble, ChatArea, Drawer } from './style'
import TitleBar from 'components/TitleBar'
import ChatBubble from 'components/ChatBubble'
import Footer from 'components/Footer'
import VoiceMessage from 'components/VoiceMessage'
import Profile from 'components/Profile'



function Conversation({children,...rest}) {


	//点击展开侧边栏的事件(🔥🔥记得要一层层传递到 TitleBar 的 Avatar 的 Onclick 事件中去！！)
	const [showDrawer, setShowDrawer] = useState(false) 


	return (
		// 👇把其他所有 ...rest 属性交给 StyleConversation 
		<StyleConversation showDrawer={showDrawer} {...rest}> 
			<ChatArea>
				{/* 点击后展开右侧边栏的事件,点击后取反！ */}
				<TitleBar 
					onAvatarClick={()=> setShowDrawer(!showDrawer)
				}/>
				<ConversationContainer>
					<ChatBubble time='Yesterday 14:00'>Hi,Jimmy!</ChatBubble>
					<MyChatBubble time='Today 10:30' type='mine'>One's courtesy is a mirror to see his image 😄.</MyChatBubble>
					<ChatBubble time='Today 10:35'>Happy Firday 🎉!</ChatBubble>
					<ChatBubble time='Today 10:38'>Where are you going to play on the weekend?</ChatBubble>
					<MyChatBubble time='Today11:00'type='mine'>
						<VoiceMessage type='mine' time='Today11:00'/>
					</MyChatBubble>
				</ConversationContainer>
				<Footer/>
			</ChatArea>

			{/* 右侧边栏, 给关闭 icon 传递关闭的参数！ */}
			<Drawer showDrawer={showDrawer}>
				<Profile onCloseClick={()=> setShowDrawer(!showDrawer)} />
			</Drawer>
		</StyleConversation>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Conversation.propTypes = {
	children: PropTypes.any
};



export default Conversation

