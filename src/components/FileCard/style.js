import Heading from "components/Heading"
import Icon from "components/Icon"
import Paragraph from "components/Paragraph"
import Popover from "components/Popover"
import styled from "styled-components";
import {card} from "utils/mixin"




const StyledFileCard = styled.div`
	${ card() }
	padding: 16px;

	display: grid;
	grid-template-areas:
		'icon name options'
		'icon size time';
	grid-template-columns: 60px 1fr 1fr;
	
	transition: all 0.3s ease-in-out;
	&:hover{
		box-shadow: 0px 20px 50px rgba(0,0,0,0.15);
		cursor:pointer;
	}
`;


const FileIcon = styled(Icon).attrs({
	width: 54,
	height: 54,
})`
	grid-area: icon;
	justify-self: start;
	align-self:center;//垂直居中
`

const FileName = styled(Heading).attrs({level:2})`
	grid-area: name;
	justify-self: start;
	margin-left: 8px;
	align-self:center;//垂直居中
	/* 👇超过就省略 */
	width:100%; //grid 布局内要写这个宽度才能出现...！!
	text-overflow: ellipsis !important;//显示省略号
	white-space: nowrap; //超出部分隐藏
	overflow: hidden; //不换行
	/* min-width: 64px; */
`

const FileSize = styled(Paragraph).attrs({size:'secondary'})`
	grid-area: size;
	justify-self: start;
	margin-left: 8px;
	align-self:center;//垂直居中
`

const Time = styled(Paragraph).attrs({size:'secondary'})`
	grid-area: time;
	justify-self: end;
	align-self:center;//垂直居中
`

const Options = styled(Popover)`
	grid-area: options;
	justify-self: end;
	align-self:center;//垂直居中
`



export default StyledFileCard;
export {FileName,FileIcon,FileSize,Time,Options};