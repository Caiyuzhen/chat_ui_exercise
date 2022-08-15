import React from 'react'
import PropTypes from 'prop-types'
import StyledContactCard, { Intro, UserName } from './style'
import Avatar from 'components/Avatar'



function ContactCard({children,...rest}) {

	return (
		<StyledContactCard {...rest}> 
			<Avatar statis='online'/>
			<UserName> Kim </UserName>
			<Intro> I am a software engineer </Intro>
		</StyledContactCard>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
ContactCard.propTypes = {
	children: PropTypes.any
};



export default ContactCard

