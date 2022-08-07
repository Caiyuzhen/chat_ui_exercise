import React from 'react'
import PropTypes from 'prop-types'
import StyleConversation, { ConversationContainer, MyChatBubble } from './style'
import TitleBar from 'components/TitleBar'
import ChatBubble from 'components/ChatBubble'
import Footer from 'components/Footer'
import VoiceMessage from 'components/VoiceMessage'



function Conversation({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleConversation 
		<StyleConversation {...rest}> 
			<TitleBar/>
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
		</StyleConversation>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Conversation.propTypes = {
	children: PropTypes.any
};



export default Conversation

