import React, {useState} from 'react'
import PropTypes from 'prop-types'
import StyledEditProfile, { GroupTitle } from './style'
import Profile from 'components/Profile'
import Avatar from 'components/Avatar'
import face1 from 'assets/images/face-female-1.jpg'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import 'styled-components/macro'//用于在 index 内可以设置 css 样式

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
				src={face1} 
				size='160px'
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
			<GroupTitle>BaseInfo</GroupTitle>
		</StyledEditProfile>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
EditProfile.propTypes = {
	children: PropTypes.any
};



export default EditProfile

