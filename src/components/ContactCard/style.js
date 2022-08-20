import StyleAvatar from "components/Avatar/style";
import Paragraph from "components/Paragraph";
import styled from "styled-components";
import { card } from '../../utils/mixin';




const StyledContactCard = styled.div`
	${card()}{
		display: grid;
		grid-template-areas:
			'avatar name'
			'avatar intro';
	}
	grid-template-columns: 48px auto;//头像占 64px，剩下的平分空间
	padding:16px;

	/* 👇👇引入 Avatar 组件的样式来做 Grid 布局！！！ */
	${StyleAvatar} {
		grid-area: avatar;
	}

	transition: all 0.3s ease-in-out;
	&:hover{
		box-shadow: 0px 20px 50px rgba(0,0,0,0.15);
		cursor:pointer;
	}
`;


const UserName = styled(Paragraph).attrs({size:'large', bold:true})`
	grid-area: name;
	margin-left: 8px;
`


const Intro = styled(Paragraph).attrs({type:'secondary'})`
	grid-area: intro;
	margin-left: 8px;
`



export default StyledContactCard;
export {UserName, Intro};
