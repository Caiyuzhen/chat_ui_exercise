import React from 'react'
import PropTypes from 'prop-types'
import StyleChatBubble, { BubbleContainer, BubbleTip, MessageText, Time } from './style'
import {ReactComponent as BubbleTipIcon} from 'assets/icons/bubbleTip.svg'



function ChatBubble({
	type, 	//表示消息的发送者（我发送的 ｜ 他人发送的，默认为他人发送的）
	time,	//发送时间
	children,//消息内容
	...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleChatBubble 
		<StyleChatBubble type={type} {...rest}> 
			<BubbleContainer>
				<MessageText>{children}</MessageText>
				<BubbleTip icon={BubbleTipIcon} width={36} height={20} color='white'/>
			</BubbleContainer>
			<Time>{time}</Time>
		</StyleChatBubble>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
ChatBubble.propTypes = {
	children: PropTypes.any,
	type:PropTypes.oneOf('mine','other'),
	time: PropTypes.string,

};



export default ChatBubble

