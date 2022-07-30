import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StatusIcon, StyleAvatar } from "components/Avatar/style"
import styled from "styled-components";
import { activeBar } from "utils/mixin"



//侧导航整体 (总)
const StyledNavBar = styled.nav`
	display: grid;
	grid-template-rows: 1fr 4fr;  //1/5  4/5
	width: 100px;
	height: 100vh;//占满浏览器
	background-color: ${( {theme} ) => theme.darkPurple};
	padding: 30px 0;

	${StyleAvatar}{
		justify-self: center;
		${StatusIcon}{
			&::before{
				background-color: ${({theme}) => theme.darkPurple};
			}
		}
	}
`



//侧导航 Tab item
const StyledMenuItem = styled.div`
	& > a {//调整 a 超链接标签
		width: 100%;
		height: 74px;

		display: flex;
		align-items: center;
		justify-content: center;

		//引入高亮色 tab 的 mixin
		${ activeBar() }
		//如果 active 不是激活状态，则不显示高亮【色条】，高度为 0，后续可以变为增长动画	
		${ ( {active} ) => active ? '' : `&::before, &::after {height:0}`}
	}
`



//菜单项（item）
const MenuItems = styled.div`
	display: grid;
	grid-template-rows: repeat(5 ,minmax(auto,88px)) 1fr;//表示前 5 个 图标取 auto~ 88px 的值，上面设置了 height: 74px; ，所以这里的 auto 就是 74px，然后最后一项 1fr 是浮动高度占满剩余空间(要配合 align-self:end)
`



//侧导航 icon , styled 内 包裹(FontAwesome)就可以传入 fortawesome 的 icon
const MenuIcon = styled(FontAwesomeIcon)`
	color:white;
	font-size: 24px;
	opacity: ${ ({active}) => active ? 1 : 0.3 };
`





export default StyledNavBar;
export  { StyledMenuItem, MenuItems, MenuIcon }