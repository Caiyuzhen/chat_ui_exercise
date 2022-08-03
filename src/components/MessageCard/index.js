import React from 'react'
import PropTypes from 'prop-types'
import StyleMessageCard,{Name,Status,Time,Message,MessageText,UnreadBadge} from './style'
import Avatar from 'components/Avatar'
import { useTheme } from 'styled-components'
import { ReactComponent as Replied } from 'assets/icons/replied.svg'
import Icon from 'components/Icon'



function MessageCard({
	avatarSrc,    //头像 url
	avatarStatus, //头像状态
	statusText,  //头像状态文字
	name,  		 //名字
	time,       //时间
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
			<StyleMessageCard {...rest} active={active}> 
				<Avatar src={avatarSrc} status={avatarStatus}/> 
				<Name>{name}</Name>
				<Status>{statusText}</Status>
				<Time>{time}</Time>
				<Message replied={replied}>
					{/* 如果已读，就显示已读 icon */}
					{ Replied && <Icon
						icon={Replied}
						width={16}
						height={16}
						color={ active ? theme.inactiveColorDark : theme.inactiveColorNor } //激活状态，则更显示深一点的 icon
						opacity={ active ? 0.4 : 1}
						style={{
							justifyContent: 'center', //靠左对齐（在网格内）
						}}
					/>}
					<MessageText>{message}</MessageText>
					<UnreadBadge count={unreadCount}/>
				</Message>	
			</StyleMessageCard>
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

