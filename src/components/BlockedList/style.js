import StyledText from "components/Text/style"; //🌋🌋注意, 引用其他组件的样式的话, 并且用 attr 来修改, 就需要引入【组件本身】以及【组件样式】！！
import Text from "components/Text"; //🌋🌋注意, 引用其他组件的样式的话, 就需要引入【组件本身】以及【组件样式】！！
import StyleAvatar from "components/Avatar/style"; //🌋🌋注意, 引用其他组件的样式的话, 并且用 attr 来修改, 就需要引入【组件本身】以及【组件样式】！！
import Avatar from "components/Avatar"; //🌋🌋注意, 引用其他组件的样式的话, 就需要引入【组件本身】以及【组件样式】！！
import StyledIcon from "components/Icon/style"; //🌋🌋注意, 引用其他组件的样式的话, 并且用 attr 来修改, 就需要引入【组件本身】以及【组件样式】！！
import Icon from "components/Icon";//🌋🌋注意, 引用其他组件的样式的话, 就需要引入【组件本身】以及【组件样式】！！
import styled from "styled-components";



const StyledBlockedList = styled.div`
	padding:2vh 4vw;
`;


//顶部导航栏
const SettingsMenu = styled.div`
	height: 148px;
	display: grid;
	grid-template-columns: 32px 1fr; //32px 为返回按钮，剩下的都为标题区域
	align-items: center;
	${StyledText}{//因为是用的 Text 组件，所以这里可以单独给 Text 这个组件设置样式！！单独让它居中！！
		grid-column: span 1/-1;//让标题变为 span 元素，并且能够占满整列宽度
		justify-self: center;
	}
`;


//🔥整个屏蔽好友列表的布局
const FriendList = styled.div`
	display: grid;
	grid-template-columns: repeat(5,1fr);//⚡️⚡️⚡️ 5 列，平分空间
	row-gap:24px;
	justify-items: center;
`


//单个屏蔽头像的容器组件
const ClosableAvatar = styled.div`
	display: grid;
	grid-template-areas:
		'avatar avatar avatar'//avatar 占 3 行 3 列
		'avatar avatar avatar'
		'avatar avatar avatar'
		'name name name'; //name 占一整行，3 列
	justify-items: center;
`


//头像, ⚡️⚡️⚡️继承了 Avatar 的样式！！
const BlockedAvatar = styled(Avatar)`
	grid-area: avatar;
`


//名字
const BlockedName = styled(Text).attrs({size:'large'})`
	grid-area: name;
	margin-top: 20px;
`


//删除头像的按钮
const CloseIcon = styled(Icon)`
	grid-area: 2 / 3 / 5 / 4;//⚡️⚡️⚡️占 2～5 行; 3~4 列
	z-index:10;
	margin-top:16px;
`




export default StyledBlockedList
export {SettingsMenu,ClosableAvatar,BlockedAvatar,BlockedName,CloseIcon,FriendList}