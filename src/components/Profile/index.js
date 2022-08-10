import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { AlbumSection, AlbumTitle, PhotoImg, Album, StyledContactSections, StyledSocialLinks, CloseIcon } from './style'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import face4 from 'assets/images/face-male-4.jpg'
import 'styled-components/macro'//🔥🔥🔥很关键，能够使用 css`` 来更改组件样式
import {faTwitter,faTumblr,faReddit,faGithub,faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import Icon from 'components/Icon'
import Sperator from 'components/Sperator'
import photo1 from 'assets/images/photo1.jpg';
import photo2 from 'assets/images/photo2.jpg';
import photo3 from 'assets/images/photo3.jpg';
import { ReactComponent as Cross } from 'assets/icons/cross.svg'




//🌟Profile 组件
function Profile({
	name,         //用户名
	area,  	     //地区
	signature,   //个性签名
	children,
	...rest
	}) {

	return (
		<StyledProfile {...rest}> 	
			{/* 在 styled 内已经包裹了 Icon，可以直接传入 svg */}
			<CloseIcon icon={Cross}/>	
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
			{/* 分割线 */}
			<Sperator
				css={`
					margin: 16px;
				`}/>
			{/* 用【样式组件】包裹【描述信息功能组件】 */}
			<StyledContactSections>
				<Description label='Connext Phone'> 852-2345-6789 </Description>
				<Description label='Email Address'> admin@Tx.com </Description>
				<Description label='Personal Address'> https://www.amy.com </Description>
			</StyledContactSections>

			{/* 分割线 */}
			<Sperator
				css={`
					margin: 16px;
				`}/>

			{/* 照片墙*/}
			<AlbumSection>
				<AlbumTitle>
					<Text type="secondary">Album（31）</Text>
					<a>More</a>
				</AlbumTitle>
				<Album>
					<PhotoImg src={photo1} alt="" />
					<PhotoImg src={photo2} alt="" />
					<PhotoImg src={photo3} alt="" />
				</Album>
			</AlbumSection> 




		</StyledProfile>
	)
}





//🌟描述信息组件
//label 是标签， children 是具体的内容
function Description ({label, children}){
	return(
		<Paragraph>
			<Text type='secondary'>{label}:</Text>
			<Text>{children}</Text>
		</Paragraph>
	)
}






/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Profile.propTypes = {
	children: PropTypes.any
};



export default Profile

