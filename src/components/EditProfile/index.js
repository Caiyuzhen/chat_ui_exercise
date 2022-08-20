import React, {useState} from 'react'
import PropTypes from 'prop-types'
import StyledEditProfile, { GenderAndRegionContainer, GroupTitle, SelectGroup, StyledSocialIconInput} from './style'
import Profile from 'components/Profile'
import Avatar from 'components/Avatar'
import face2 from 'assets/images/face-female-2.jpg'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import 'styled-components/macro'//用于在 index 内可以设置 css 样式
import InputText from 'components/Input/InputText'
import Radio from 'components/Radio'
import Select from 'components/Select'
import Option from 'components/Option'
import LabelContainer from 'components/LabelContainer'
import Icon from 'components/Icon'
import {faTwitter,faTumblr,faReddit} from '@fortawesome/free-brands-svg-icons'


function EditProfile({children,...rest}) {
	//👇用于判断 profile 是显示编辑态还是阅读态(false)
	const [showEdit, setShowEdit] = useState(false)
	// 如果为 true 就直接展示 编辑态的 Profile 
	if(!showEdit){
		//Prodile 组件内有编辑事件，当传入 Edit 才会激活
		//🔥🔥激活的话d当 onclick 就调用 ()=>setShowEdit(true) 这个 事件，把 showEdit 改为 true, 然后就会显示下面的编辑、关闭按钮
		return <Profile 
			onEdit={()=>setShowEdit(true)}
			showEditBtn
			showCloseIcon={false}
			/>
	}

	return (
		<StyledEditProfile {...rest}> 
			<Avatar 
				src={face2} 
				size='80px'
				css={`
					grid-area: 1 / 1 / 2 / 2; 
					justify-self: center;
					margin-bottom:12px;
				`}/>
			<Button 
				size='48px'
				css={`
					grid-area: 1 / 1 / 4 / 2; 
					justify-self: end;
					align-self: end;
					z-index:10;
				`}>
				<FontAwesomeIcon icon={faCheck} onClick={ ()=>setShowEdit(false) }/>
			</Button>


			{/* 标题样式 */}
			<GroupTitle>Base Info</GroupTitle>
			<InputText label='NickName'/>
			<GenderAndRegionContainer>
				<Radio.Group label='Gender'>
					<Radio name='gender'>female</Radio>
					<Radio name='gender'>male</Radio>
				</Radio.Group>
				{/* 地区标题 */}
				<LabelContainer label='Area'>
					{/* 样式布局 */}
					<SelectGroup>
						<Select type='form'>
							<Option>Province</Option>
						</Select>
						<Select type='form'>
							<Option>City</Option>
						</Select>
						<Select type='form'>
							<Option>County</Option>
						</Select>
					</SelectGroup>
				</LabelContainer>
			</GenderAndRegionContainer>
			{/* 个性签名 */}
			<InputText label='Personalized Signature'/>


			{/* 标题样式 */}
			<GroupTitle>Contact Info</GroupTitle>
			<InputText label='Email address'/>
			<InputText label='Phone number'/>
			<InputText label='Personal website'/>


			{/* 调用下面【编辑态下】的【社交信息组件】 */}
			<GroupTitle>Social Info</GroupTitle>
			<SocialIconInput icon={faTwitter} bgColor='#1DA1F2'/>
			<SocialIconInput icon={faTumblr} bgColor='#36465D'/>
			<SocialIconInput icon={faReddit} bgColor='#FF4500'/>
		</StyledEditProfile>
	)
}


//【编辑态】下的社交信息组件
function SocialIconInput({ icon, bgColor, ...rest}){
	return(
		// StyleSocialIconInput
		<StyledSocialIconInput>
			<Icon.Social icon={icon} bgColor={bgColor}/>
			<InputText {...rest}/>
		</StyledSocialIconInput>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
EditProfile.propTypes = {
	children: PropTypes.any
};



export default EditProfile

