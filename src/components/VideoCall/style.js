import Avatar from "components/Avatar"
import Button from "components/Button"
import styled from "styled-components";
import { card } from "utils/mixin"


//正常最大化的视频会议样式
const StyledVideoCall = styled.div`
	height: 60vh;
	padding:20px;
	padding-bottom: 40px;

	/* 🔥🔥👇👇让背景填充为自己上传的图片！！ */
	background-image:url(${({src}) => src});
	background-size: cover;
	background-position: center;
	background-position-y: -300px;

	display: grid;
	grid-template-areas: 
		'minimize'
		'self'
		'actions';
`;


//最小化按钮
const Minimize = styled(Button)`
	grid-area: minimize;
	justify-self: end;
	background-color: ${({theme}) => theme.gray3};
	padding: 0;
	width: 32px;
	height: 32px;
	font-size: 16px;
`



//按钮组
const ActionGroup = styled.div`
	/* grid-area: actions / minimize; //2 1 3 3 */
	/* grid-area: 2  /  1  /  3  /  3; */
	align-self: end;
	justify-self: center;

	display: grid;
	grid-template-columns: 90px 90px 90px;
`


//具体的每个按钮
const Action = styled(Button).attrs({size:'64px',shape:'circle'})`
	width:48px;
	height: 48px;
	font-size: 20px;//里边的图形
	color: white;
	box-shadow: none;

	//🔥🔥🔥判断是否是挂断状态记得要传入 {theme,type} 两个参数！！
	background: ${({theme, type}) => type === 'hangOff' ? theme.red2 : theme.grayDark2 };
`


//头像区域
const Self = styled(Avatar)`
	grid-area: self;
	justify-self: center;
	align-self: center;
	border: 2px solid ${({theme}) => theme.gray4};
	border-radius: 50%;
`


//🪟最小化的浮窗布局样式
const VideoCallAlert = styled.div`
	display: grid;
	grid-template-areas:
		'avatar info info'
		'avatar action icon';
	row-gap: 8px;
	column-gap: 8px;
	width: max-content;//🌟🌟🌟宽度根据内容的最大宽度去定义
	position: absolute;
	right: 0;
	top:10vh;
	border: 1px solid ${({theme}) => theme.gray4};
	border-radius: 12px;
	z-index: 200;
	${card};
	draggable="true";
`




export default StyledVideoCall;
export {ActionGroup, Action, Minimize, Self, VideoCallAlert};