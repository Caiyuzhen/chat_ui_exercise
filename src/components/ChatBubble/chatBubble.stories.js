import VoiceMessage from "components/VoiceMessage"
import React from "react";
import ChatBubble from ".";

export default {
	title: "UI 组件/ChatBubble",
	component: ChatBubble,
	//🚀🚀🚀给这组 story 下所有的内容自定义样式!!
	decorators:[storyFn => <div style={{padding:'84px'}}>{storyFn()}</div>]
}



//文字气泡 ————————————————————————————————————————————————————————————————
export const OthersChat = () => (
	// 这里的内容就是 children 属性！！
	<ChatBubble time='Yesterday 14:00'>这是一条他人发送的消息</ChatBubble>
)


export const MyChat = () => (
	// 这里的内容就是 children 属性！！
	<ChatBubble type='mine' time='Yesterday 14:00'>这是一条他人发送的消息</ChatBubble>
)





//语音气泡 ————————————————————————————————————————————————————————————————
export const OthersVoice = () => (
	// 这里的内容就是 children 属性！！
	<ChatBubble time='Yesterday 14:00'>
		<VoiceMessage type time='1:23'/>
	</ChatBubble>
)


export const MyVoice = () => (
	// 这里的内容就是 children 属性！！
	<ChatBubble type='mine' time='Yesterday 14:00'>
		<VoiceMessage type='mine' time='1:23'/>
	</ChatBubble>
)