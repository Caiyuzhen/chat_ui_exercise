import Heading from "components/Heading"
import Paragraph from "components/Paragraph"
import styled from "styled-components";
import { card } from "utils/mixin"


//整体卡片
const StyledNoteCard = styled.div`
	display: grid;
	grid-template-areas:
		'img title time'
		'img excerpt excerpt';
	grid-template-columns: 60px 2fr 1fr;

	${card()}
	padding: 16px;

	transition: all 0.3s ease-in-out;
	&:hover {
		box-shadow: 0px 20px 50px rgba(0,0,0,0.15);
		cursor:pointer;
	}
`;


//图片
const NoteImage = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;//图片填充方式
	grid-area: img;
	border-radius: 12%;
`


//标题
const NoteTitle = styled(Heading).attrs({level:2})`
	grid-area: title;
	align-self: start;
	margin-left: 12px;
	align-self: center;
	/* 👇超过就省略 */
	width:128px; //grid 布局内要写这个宽度才能出现...！!
	text-overflow: ellipsis !important;//显示省略号
	white-space: nowrap; //超出部分隐藏
	overflow: hidden; //不换行
`


//摘要
const NoteExcerpt = styled(Paragraph).attrs({type: 'secondary'})`
	grid-area: excerpt;
	align-self: flex-start;
	margin-left: 12px;
	align-self: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`


//时间
const NotePublishTime = styled(Paragraph).attrs({size:'small'})`
	grid-area: time;
	align-self: center;
	justify-self: end;
`





export default StyledNoteCard;
export {NoteTitle, NoteExcerpt, NotePublishTime, NoteImage};