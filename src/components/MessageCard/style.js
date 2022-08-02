import Text from "components/Text"
import Badge from "components/Badge"
import styled from "styled-components";
import { card } from "utils/mixin"


//整体卡片
const StyledMessageCard = styled.div`
	/*  🚀🚀🚀 调用 mixins.js 中的 Card 布局！！ */
	${ card() }
`


//🔥🔥用户名,传入 Text 组件，并传入样式（字号）！！这样就省了在 index.js 内去传入属性
const Name = styled(Text).attrs({size:'Xlarge'})`

`

//消息时间
const Time = styled(Text).attrs({size:'medium', type:'secondary'})`

`

//消息状态
const Status = styled(Text).attrs({type:'secondary'})`

`

//消息文本的容器（包含消息体跟 Badge）
const Message = styled.div`

`

//消息体本身的 div
const MessageText = styled(Text).attrs({ ellipsis: true })`

`

//未读红点
const UnreadBadge = styled(Badge)`

`




export {Name,Time,Status,Message,MessageText,UnreadBadge}
export default StyledMessageCard;