import React from 'react'
import PropTypes from 'prop-types'
import StyledMessageCard,{Name,Status,Time,Message,MessageText,UnreadBadge} from './style'
import Avatar from 'components/Avatar'
import { useTheme } from 'styled-components'
import { ReactComponent as Replied } from 'assets/icons/replied.svg'
import Icon from 'components/Icon'



function MessageCard({
	avatarSrc,    //头像 url
	avatarStatus, //头像状态
	statusText,  //头像状态文本
	name,  		 //名字文本
	time,       //时间文本
	message,     //消息体
	unreadCount,  //未读数
	active, 	//是否为激活状态
	replied,    //是否已回复
	children,
	...rest
	}) {

	
	const theme = useTheme() //💅💅💅 调用 useTheme() 这个 hook 来修改样式！！



		
	return (
		<>
			{/* // 👇把其他所有 ...rest 属性交给 StyleMessageCard 
			//先定义数据状态 + 定义样式 */}
			<StyledMessageCard active={active} {...rest}> 
				<Avatar src={avatarSrc} status={avatarStatus}/> 
				<Name>{name}</Name>
				<Status>{statusText}</Status>
				<Time>{time}</Time>
				<Message replied={replied}>
					{/* 🚀🚀如果已读，就加载已读的样式（三栏 Grid） */}
					{ replied && (<Icon
						icon={Replied}
						width={16}
						height={16}
						color={ active ? theme.inactiveColorDark : theme.inactiveColor } //激活状态，则更显示深一点的 icon 颜色
						opacity={ active ? 0.6 : 1}
						style={{
							justifyContent: 'start', //靠左对齐（在网格内）
						}}
					/>)}
					<MessageText>{message}</MessageText>
					<UnreadBadge count={unreadCount}/>
				</Message>	
			</StyledMessageCard>
		</>
	
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
MessageCard.propTypes = {
	avatarSrc: PropTypes.string.isRequired,
	avatarStatus: PropTypes.any,
	statusText: PropTypes.any,
	name: PropTypes.any,
	time: PropTypes.any,
	message: PropTypes.any,
	unreadCount: PropTypes.number,
	active: PropTypes.bool,
	replied: PropTypes.bool,
	children: PropTypes.any,
};



export default MessageCard


