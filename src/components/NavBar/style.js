import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";
import { activeBar } from "utils/mixin"


//侧导航整体
const StyledNavBar = styled.div``



//侧导航 Tab
const StyledMenuItem = styled.div`
	& > a {//调整 a 超链接标签
		width: 100%;
		height: 74px;
		display: flex;
		align-items: center;
		justify-content: center;
		//引入高亮色 tab
		${ activeBar() }
		//如果 active 不是激活状态，则不显示高亮【色条】，高度为 0，后续可以变为增长动画	
		${ ( {active} ) => active ? '' : `&::before, &::after {height:0}`}
	}
`


//侧导航 icon , styled 内 包裹(FontAwesome)就可以传入 fortawesome 的 icon
const MenuIcon = styled(FontAwesomeIcon)`
	color:white;
	font-size: 24px;
	opacity: ${ ({active}) => active ? 1 : 0.3 };
`



export default StyledNavBar;
export  { StyledMenuItem, MenuIcon }