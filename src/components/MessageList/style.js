import StyledMessageCard from "components/MessageCard/style"
import styled from "styled-components";



const StyledMessageList = styled.div``;

//定义消息列表的容器布局
const ChatList = styled.div`
	${StyledMessageCard}{
		margin-bottom: 20px;
	}
`


export default StyledMessageList
export {ChatList}