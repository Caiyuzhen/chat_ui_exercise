import React from "react";
import MessageCard from ".";
import face1 from 'assets/images/face-female-4.jpg'

export default {
	title: "UI 组件/MessageCard",
	component: MessageCard
};

export const Default = () => (
	<MessageCard
		// avatarSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		avatarSrc={face1}
		avatarStatus='Online'
		statusText="在线"
		name="Jimmy"
		time="3 hours ago"
		message="Anger begins with folly, and ends in repentance. "
		unreadCount={12}
		// avatarSrc,    //头像 url
		// avatarStatus, //头像状态
		// statusText,  //头像状态文字
		// name,  		 //名字
		// time,       //时间
		// message,     //消息体
		// unreadCount,  //未读数
		// active, 	//是否为激活状态
		// replied,    //是否已回复
	/>
	)