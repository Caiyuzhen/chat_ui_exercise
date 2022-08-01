import StyledText from "components/Text/style";
import styled, {css} from "styled-components";




const StyledParagraph = styled(StyledText)`//🔥🔥继承 Text 组件的 样式组件！！并进行修改
	//判断是否显示省略号
	${( {ellipsis})=>
		ellipsis && css`
			text-overflow: ellipsis;//显示省略号
			white-space: nowrap;//不换行
			overflow: hidden;//超出部分隐藏
	`}	
`;

export default StyledParagraph;