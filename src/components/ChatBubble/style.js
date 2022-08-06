import styled from "styled-components";
import Text from 'components/Text';
import Icon from "components/Icon"





//整体 div
const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;
`;

//发送时间
const Time = styled(Text).attrs({size: 'smallFont',type:'secondary'})``

//气泡文字
const MessageText = styled(Text).attrs({size:'mediumFont'})``

//气泡容器
const BubbleContainer = styled.div`
	padding: 14px 22px; 
	box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
	border-radius: 100rem;
	position: relative;
	z-index:10;
`

//气泡尖角
const BubbleTip = styled(Icon)`//让 BubbleTip 可以传递 icon 属性！
	position: absolute;
	bottom:-20%;
	left:10px;
	z-index:5;
`





export default StyledChatBubble;
export {Time,MessageText,BubbleContainer,BubbleTip};