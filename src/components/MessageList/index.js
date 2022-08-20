import React from 'react'
import PropTypes from 'prop-types'
import StyleMessageList, { ChatList } from './style'
import Filter from 'components/Filter'
import Select from 'components/Select'
import Button from 'components/Button'
import Option from 'components/Option'
import Icon from 'components/Icon'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import MessageCard from 'components/MessageCard'
import face1 from 'assets/images/face-male-1.jpg'
import FilterList from 'components/FilterList'




// 组装所有组件形成消息列表
function MessageList({children,...rest}) {
	return (
		// 👇把其他所有 ...rest 属性交给 StyleMessageList 
		<StyleMessageList {...rest}> 
			{children}
			{/* 👇方法一：在本组件内写组件进行调用, ChatList 单独拿出来 */}
			{/* <Input.Search/>
			<ChatFilter/> */}
			{/* 👇方法二：调用抽离出来的过滤组件, ChatList 作为 children */}
			<FilterList 
				options={['最新消息优先','在线好友优先','更多选项...']}//传递一个数组！
				actionLabel
			>
				<ChatList>
					{[1,2,3,4,5,6].map((_,index)=>( //🍔🍔🍔🔥使用 map 循环来生成 6 张消息卡片
						<MessageCard 
							key={index} //必须要加个 key ！
							active={index === 2}//第 3 张为选中态
							replied={index % 3 ===0}//每隔三个为已回复的状态
							avatarSrc={face1}
							name='Alan'
							statusText='Online'
							time='8小时之前'
							message='Four short words sum up what has lifted most successful individuals above the crowd: a little bit more.'
							unreadCount={6}
						/>
					))}
				</ChatList>
			</FilterList>
		</StyleMessageList>
	)
}



//Message 的过滤组件
function ChatFilter(){
	return(
	<Filter style={{padding:'20px 0'}}>
		{/* 传参 ,FilterItems 为左侧过滤菜单的【 item 选项】*/}
		<Filter.FilterItems label='列表排序'>
			<Select>
				<Option>最新消息优先</Option>
				<Option>在线好友优先</Option>
			</Select>
		</Filter.FilterItems>
		
		<Filter.Action label='创建会话'>
			<Button shape="circle">
				<Icon icon={Plus} width={14} height={14}/>
			</Button>
		</Filter.Action>
	</Filter>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
MessageList.propTypes = {
	children: PropTypes.any
};



export default MessageList
export {ChatFilter}

