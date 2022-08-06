import styled,{css} from 'styled-components'
import Paragraph from 'components/Paragraph'
import Text from 'components/Text'
import Icon from 'components/Icon'






//整体 div（🔥🔥🔥也是在这里进行 Variants 的判断！）
const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  //🔥🔥判断使用哪个变体！//如果是 mine，就加载 mine 的样式
  ${({type})=>type && typeVariants[type]}
`;


//发送时间
const Time = styled(Paragraph).attrs({size: 'smallFont',type:'secondary'})`
	margin: 12px;
	margin-left: 2px;
	word-spacing: 1rem;
`

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
	bottom:-14%;
	left:0px;
	z-index:5;
`

//🔥🔥🔥区分他人发送与我发送消息的变体
const typeVariants = {
	//如果 type = 'mine'，则返回我的消息气泡的样式
	mine: css`
		//引用上面的基础 Bubble 再进行修改！
		${BubbleContainer}{
			background-color:${({theme})=>theme.primaryColor};
		}
		//引用上面的气泡尖角，调整朝向跟颜色
		${BubbleTip}{
			transform:rotateY(180deg);
			left:unset;
			right:0px;
			path {
				fill:${({theme})=>theme.primaryColor}
			}
		}
		//时间文本靠右
		${Time}{
			text-align:right;//文本右对齐
			margin-left:0;
			margin-right:2px;
		}
		//文本反白
		${MessageText}{
			color: white;
		}

	`
}





export default StyledChatBubble;
export {Time,MessageText,BubbleContainer,BubbleTip};