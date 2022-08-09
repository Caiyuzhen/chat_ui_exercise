import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { StyledSocialLinks } from './style'
import Paragraph from 'components/Paragraph'
import Avatar from 'components/Avatar'
import face4 from 'assets/images/face-male-4.jpg'
import 'styled-components/macro'//🔥🔥🔥很关键，能够使用 css`` 来更改组件样式
import {faTwitter,
		faTumblr,
		faReddit,
		faGithub,
		faLinkedin,
	    } from '@fortawesome/free-brands-svg-icons'
import Icon from 'components/Icon'



function Profile({
	name,         //用户名
	area,  	     //地区
	signature,   //个性签名
	children,
	...rest
	}) {

	return (
		<StyledProfile {...rest}> 		
			<Avatar 
				src={face4}
				status='online'
				size='120px'
				statusIconSize='20px'
				css={`margin-bottom: 24px;`}
				/>
			{/* 名字, 用 css 的 macro 方法来更改 Paragraph 组件内的样式！！ */}
			<Paragraph size='xlarge' css={`margin-bottom:8px; font-weight:600;`}>{name}</Paragraph>
			{/* 地区 */}
			<Paragraph type='secondary' css={`margin-bottom:12px;`}>{area}</Paragraph>
			{/* 个性签名 */}
			<Paragraph size='small' >{signature}</Paragraph>
			<StyledSocialLinks>
				<Icon.Social 
					shape='squareFixed'
					height='40px'
					width='88px'
					icon={faTwitter}
					bgColor='#1DA1F2'
					href='https://twitter.com/'
				/>
				<Icon.Social 
					shape='squareFixed'
					height='40px'
					width='88px'
					icon={faTumblr}
					bgColor='#36465D'
					href='https://tumblr.com/'
				/>
				<Icon.Social 
					shape='squareFixed'
					height='40px'
					width='88px'
					icon={faReddit}
					bgColor='#FF4500'
					href='https://reddit.com/'
				/>
			</StyledSocialLinks>
		</StyledProfile>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Profile.propTypes = {
	children: PropTypes.any
};



export default Profile

