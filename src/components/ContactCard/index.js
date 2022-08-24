import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Intro, UserName } from './style'
import Avatar from 'components/Avatar'


//contact 是后写的, 传入 mock 的数据并进行解析
function ContactCard({contact, children,...rest}) {

	return (
		<StyledContactCard {...rest}> 
			<Avatar src={contact.avatar} statis={contact.statusText}/>
			<UserName> {contact.name} </UserName>
			<Intro> {contact.intro} </Intro>
			{/* 👇写死的方式, 没有用假数据 */}
			{/* <Avatar statis='online'/>
			<UserName> Kim </UserName>
			<Intro> I am a software engineer </Intro> */}
		</StyledContactCard>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
ContactCard.propTypes = {
	children: PropTypes.any
};



export default ContactCard

