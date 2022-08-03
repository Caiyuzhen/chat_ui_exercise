import React from 'react'
import PropTypes from 'prop-types'
import StyleMessageList, { ChatList } from './style'
import Filter from 'components/Filter'
import Select from 'components/Select'
import Button from 'components/Button'
import Option from 'components/Option'
import Icon from 'components/Icon'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'
import Input from 'components/Input'


// 组装所有组件形成消息列表
function MessageList({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleMessageList 
		<StyleMessageList {...rest}> 
			{children}
			<Input.Search/>
			<ChatFilter/>
			<ChatList>
				
			</ChatList>
		</StyleMessageList>
	)
}



//过滤组件
function ChatFilter(){
	return(
	<Filter style={{padding:'20px 0'}}>
		{/* 传参 ,FilterItems 为左侧过滤菜单的名字 */}
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

