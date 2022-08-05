import React from "react";
import MessageCard from ".";
import face1 from 'assets/images/face-female-4.jpg'
import face2 from 'assets/images/face-female-3.jpg'

export default {
	title: "UI 组件/MessageCard",
	component: MessageCard
};


//未回复，未激活
export const Default = () => (
	<MessageCard
		avatarSrc={face1}
		name="Amanda"
		avatarStatus='online'
		statusText="在线"
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


//未回复，已激活
export const Active = () => (
	<MessageCard
		avatarSrc={face2}
		name="Caroline"
		avatarStatus='offline'
		statusText="离线"
		time="1 hours ago"
		message="Read, study and learn about everything imporant in your life"
		unreadCount={12}
		active
	/>
)


//已回复，未激活
export const RepliedInactive = () => (
	<MessageCard
		avatarSrc={face2}
		name="Caroline"
		avatarStatus='offline'
		statusText="离线"
		time="1 hours ago"
		message="Read, study and learn about everything imporant in your life"
		unreadCount={12}
		replied
	/>
)


//已回复，已激活
export const Replied = () => (
	<MessageCard
		avatarSrc={face2}
		name="Caroline"
		avatarStatus='offline'
		statusText="离线"
		time="1 hours ago"
		message="Read, study and learn about everything imporant in your life"
		unreadCount={12}
		replied
		active
	/>
)


















