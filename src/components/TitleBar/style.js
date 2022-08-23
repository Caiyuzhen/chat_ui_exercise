import styled from "styled-components"
import Text from "components/Text"
import StyledIcon from "components/Icon/style"
import { animated } from "react-spring"
// import { card } from "utils/mixin"


//整体
const StyledTitleBar = styled(animated.div)`//✈️第五步：用 animated 包裹，可以使用 react-spring 的动画属性
	display: grid;
	padding: 30px;
	grid-template-columns: 64px 1fr 112px;
	max-height:110px;
	border-bottom: 1px solid ${( {theme} ) => theme.gray4 };
`

//标题区域
const TitleArea = styled(Text).attrs({size:'large', bold:true})`
	display:grid;//Grid 默认为垂直布局
	width: 220px;
`

//操作区域
const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* 👇👇鼠标移过 Action 按钮时变为点击态，引入 Icon 的 style！ */
	${StyledIcon}{
		cursor: pointer;
	}
`






export default StyledTitleBar
export { TitleArea, Actions }