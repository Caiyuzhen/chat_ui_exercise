import React from "react";
import ChatBubble from ".";

export default {
	title: "UI 组件/ChatBubble",
	component: ChatBubble
};

export const Default = () => (
	// 这里的内容就是 children 属性！！
	<ChatBubble time='last day'>这是一条他人发送的消息</ChatBubble>
)