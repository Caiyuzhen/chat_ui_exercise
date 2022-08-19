import Text from "components/Text"
import Badge from "components/Badge"
import styled, { css } from "styled-components"
import { card,activeBar } from "utils/mixin"
import StyleAvatar from "components/Avatar/style"
import Paragraph from "components/Paragraph"



//消息卡片的样式
const StyledMessageCard = styled.div`
	/*  🚀🚀🚀 调用 mixins.js 中的 Card 样式（卡片投影）！！ */
	${ card() }
	//网格布局分配内容区域
	display: grid;
	grid-template-areas:  //网格排版
		"avatar  name time"
		"avatar  status status"
		"message message message";
	grid-template-columns: 64px 1fr 1fr;//⚡️头像列 64px（固定宽度），其余两列平分空间(浮动宽度)
	row-gap: 16px; //网格高度行间距
	background: ${({ theme }) => theme.background};
	transition: 0.4s;	
	&:hover{
		box-shadow: 0px 20px 50px rgba(0,0,0,0.15);
		cursor:pointer;
	}
	
	//⚡️⚡️单独设置头像的布局！采用引用之前 Avatar 的 StyledAvatar 的方式！！然后添加额外的布局
	${StyleAvatar}{
		grid-area: avatar;//让头像站在上面的 Grid 的 template 位置
		align-items: center;//头像那一列垂直居中（与名字一起垂直居中，因为头像最大，按最大的去对齐全）
	}

	//点击态！！如果是鼠标按下的激活态，则给予另一种样式！！短路运算来判读
	//几个组件的字体颜色在选中的状态下都反白
	/* 隐藏外露的部分 */
	${({ active }) =>
		active && css`
			background: ${( {theme}) => theme.darkPurple };
			${Name}, ${Status}, ${Time}, ${MessageText}{ 
				color: white;
			}
			${Status}, ${Time}{
				opacity: 0.4;
			}
			${activeBar({ barWidth:'4px', shadowWidth:'14px' })}//左侧高亮条
			overflow: hidden;
	`}
	
`




//🔥🔥用户名,传入 Text 组件，并传入样式（字号）！！这样就省了在 index.js 内去传入属性
const Name = styled(Text).attrs({size:'xxlarge', bold:true})`
	grid-area: name;//让 Name 站在上面的 Grid 的 template 位置
`

//消息时间
const Time = styled(Text).attrs({size:'medium', type:'secondary'})`
	grid-area: time;//让 Time 站在上面的 Grid 的 template 位置
	justify-self: end;/* 靠网格的右侧对齐 */
`

//消息状态
const Status = styled(Text).attrs({type:'secondary'})`
	grid-area: status; //让 Status 站在上面的 Grid 的 template 位置
`

//消息文本的容器（包含消息体跟 Badge）
const Message = styled.div`
	grid-area: message; //让 Message 站在上面的 Grid 的 template 位置
	display: grid; //🌟消息容器本身也是 Grid 布局！！
	grid-template-columns: 1fr 30px; //未读状态只显示两栏：（固定宽度）+（浮动宽度）
	align-items: center; //垂直居中
	//如果是已读状态则显示为三栏 （固定宽度）+（浮动宽度）+ （固定宽度）
	${ ({replied})=> 
		replied && css`
			grid-template-columns: 24px 1fr 30px;
		`
	 }
`

//消息体本身的 div
const MessageText = styled(Paragraph).attrs({ ellipsis: true })`
	
`

//未读红点
const UnreadBadge = styled(Badge)`
	justify-self: end; //未读红点再 Grid 内靠右对齐
`







export default StyledMessageCard;
export { Name, Time, Status, Message, MessageText, UnreadBadge };