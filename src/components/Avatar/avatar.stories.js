import React from "react"
import Avatar from "."
import face1 from '../../assets/images/face-female-1.jpg'
import face2 from '../../assets/images/face-female-2.jpg'
import face3 from '../../assets/images/face-female-3.jpg'
import face4 from '../../assets/images/face-female-4.jpg'
// import "../../story.css"//🔥🔥加载外部样式！！(后续写在 preview 了)



export default{
	title:'UI 组件/Avatar',
	component: Avatar,
}


//导出 Avatar 组件到 storybook
export const Default = () => {
	return <Avatar src={face1} size="48px"/>
}

export const Sizes = () => {
	return (
		<div className='row-element'>
			<Avatar src={face1} size="24px" status="offline" statusIconSize="6px"/>
			<Avatar src={face2} size="48px" status="offline" statusIconSize="12px"/>
			<Avatar src={face3} size="92px" status="online" statusIconSize="18px"/>
			<Avatar src={face4} size="184px" status="online" statusIconSize="26px"/>
		</div>
	)
}

