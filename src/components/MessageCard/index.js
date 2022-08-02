import React from 'react'
import PropTypes from 'prop-types'
import StyleMessageCard,{Name,Status,Time,Message,MessageText,UnreadBadge} from './style'
import Avatar from 'components/Avatar'




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

	return (
		<>					
			{/* // 👇把其他所有 ...rest 属性交给 StyleMessageCard 
			//先定义数据状态 + 定义样式 */}
			<StyleMessageCard {...rest} active={active}> 
				<Avatar src={avatarSrc} status={avatarStatus}/> 
				<Name>{name}</Name>
				<Status>{statusText}</Status>
				<Time>{time}</Time>
				<Message>
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

