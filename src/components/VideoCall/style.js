import Avatar from "components/Avatar"
import Button from "components/Button"
import styled from "styled-components";



const StyledVideoCall = styled.div`
	height: 100%;
	padding:20px;
	padding-bottom: 40px;

	/* 🔥🔥👇👇让背景填充为自己上传的图片！！ */
	background-image:url(${({src}) => src});
	background-size: cover;
	background-position: center;
	background-position-y: -500px;

	display: grid;
	grid-template-areas: 
		'minimize minimize'
		'actions self';
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
	grid-area: 2  /  1  /  3  /  3;
	align-self: end;
	justify-self: center;

	display: grid;
	grid-template-columns: 90px 90px 90px;
`


//具体的每个按钮
const Action = styled(Button).attrs({size:'64px'})`

`


//头像区域
const Self = styled(Avatar)`
	grid-area: self;
	justify-self: center;
	align-self: center;
`




export default StyledVideoCall;
export {ActionGroup, Action, Minimize, Self};