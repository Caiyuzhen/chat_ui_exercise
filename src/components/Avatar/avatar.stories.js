import React from "react"
import Avatar from "."

export default{
	title:'Avatar',
	component: Avatar,
}


//导出 Avatar 组件到 storybook
export const Default = () => {
	return <Avatar />
}