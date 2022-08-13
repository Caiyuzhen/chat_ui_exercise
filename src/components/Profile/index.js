import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { AlbumSection, AlbumTitle, PhotoImg, Album, StyledContactSections, StyledSocialLinks, CloseIcon } from './style'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Avatar from 'components/Avatar'
import face4 from 'assets/images/face-male-4.jpg'
import 'styled-components/macro'//🔥🔥🔥很关键，能够使用 css`` 来更改组件样式
import {faTwitter,faTumblr,faReddit,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Icon from 'components/Icon'
import Sperator from 'components/Sperator'
import photo1 from 'assets/images/photo1.jpg';
import photo2 from 'assets/images/photo2.jpg';
import photo3 from 'assets/images/photo3.jpg';
import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




//🌟Profile 组件
function Profile({
	showEditBtn,  		//编辑态的按钮
	showCloseIcon=true,//关闭按钮,默认显示
	onEdit,		 		//点击编辑按钮后要做的进一步动作,点击后进行回调
	status,	     		//是否显示在线状态
	name,         		//用户名
	area,  	     		//地区
	signature,   		//个性签名
	children,
	...rest
	}) {

	return (
		<StyledProfile {...rest}> 	
			{/* 在 styled 内已经包裹了 Icon，可以直接传入 svg */}
			{showCloseIcon && <CloseIcon icon={Cross}/>	}
			<Avatar 
				src={face4}
				status={status}
				size='120px'
				statusIconSize='20px'
				css={`
					margin-bottom: 24px;
					/* 因为 profile 是 grid 布局，因此可以规定头像、编辑按钮占据的【行号跟列号】 */
					grid-area: 1 / 1 / 3 / 2;//开始行  开始列  结束行  结束列 (相当于占据 2 行 1 列)
					`}
				/>
			{/* 👇是否显示头像的编辑按钮 */}
			{onEdit && 
				<Button 
					size='48px' 
					shape='circle' 
					onClick={onEdit} //点击后就触发 onEdit 的回调,进入编辑态
					css={`
						//修改 ✏️编辑 按钮的位置
						grid-area: 1 / 1 / 3 / 2;//开始行  开始列  结束行  结束列 (相当于占据 2 行 1 列)
						align-self: end;
						margin-left: 80px;
						margin-bottom:8px;
						z-index:10;
					`}
					>
					<FontAwesomeIcon css={`font-size:20px;`} icon={faPen}/>
				</Button>}
			{/* 用户名, 用 css 的 macro 方法来更改 Paragraph 组件内的样式！！ */}
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
				<Description label='Phone number'> 852-2345-6789 </Description>
				<Description label='Email address'> admin@Tx.com </Description>
				<Description label='Personal Website'> https://www.amy.com </Description>
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

