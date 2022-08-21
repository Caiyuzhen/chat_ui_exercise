import ChatBubble from "components/ChatBubble"
import styled,{css} from "styled-components";



//整体 conversation 面板
const StyledConversation = styled.div`
	display: flex;
	height: 100vh;	
	width: 100%;
	overflow: hidden;
	position: relative;
`;



//对话区域
const ChatArea = styled.div`
	position: relative;
	display: flex;
	flex-grow:1; //🌟🌟占满剩余的可用空间,很关键！！
	flex-direction: column; //纵向排列
	height: 100vh;		//高度占满浏览器
	padding-bottom:16px;
	/* border-radius: 2rem; */
	background:${({theme}) => theme.background};
	border: 1px solid ${({theme}) => theme.gray4};

	//👇👇👇👇👇最后一个子集，也就是 footer 固定在底部！！🔥
	& > *:last-child{
		align-self: end;
	}
`

//消息容器区域
const ConversationContainer = styled.div`
position: relative	;
	padding: 30px 30px;
	display: flex;
	flex: 1; //🔥🔥🔥平均分配 flex 的宽度, 跟 grid 的原理一样，比如也可以【flex: 1 1 100px;】
	flex-direction: column;
	align-items: flex-start; //先统一靠左对齐，然后再把 mine 的特化出来
	width: 100%;
	overflow-y: auto; //很关键，让【消息气泡】 可以滚动，然后滚动条就跟随浏览器显示去判断是否显示

	& > * {
		margin: 10px 0;//🔥🔥🔥设置消息气泡的间距！！
	}
`

//🌟🌟我发送的消息的样式进行特化！！👇👇继承了 ChatBubble 的样式！！！然后进行样式的特化！！
const MyChatBubble = styled(ChatBubble).attrs( {type: 'mine'} )`
	align-self: flex-end;
`




//右侧边栏(Profile 面板)
const Drawer = styled.div`

	//👇默认为 0 px, 点击后展开
	//🌟写法一：
	${({showDrawer}) => showDrawer ? `''` : `display: none;`}

	//🌟写法二：
	/* ${({showDrawer}) => showDrawer && css`display: '';`} */
	
`;




export default StyledConversation
export{ConversationContainer, MyChatBubble, ChatArea, Drawer}