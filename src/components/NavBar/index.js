import React from 'react'
import PropTypes from 'prop-types'
import StyledNavBar, { MenuIcon, StyledMenuItem } from './style'
import Badge from 'components/Badge'



//侧导航整体
function NavBar({children,...rest}) {
	return (
		// 👇把其他所有 ...rest 属性交给 StyleNavBar 
		<StyledNavBar {...rest}> 
			{children}
		</StyledNavBar>
	)
}


//侧导航 Tab
function MenuItem({icon, active, showBadge, ...rest}){ //图标、是否高亮、是否显示红点, 剩余属性
	return(
		//active用来控制是否展示--底色
		<StyledMenuItem active={active} {...rest}>
			{/* 因为 tab 需要可以点击，所以使用 href */}
			<a href="#">
				{/* Badge 组件有子内容时候就会显示数字 */}
				<Badge show={showBadge}>
					{/* active用来控制是否激活--底色 */}
					<MenuIcon active={active} icon={icon}/>
				</Badge>
			</a>
		</StyledMenuItem>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
NavBar.propTypes = {
	children: PropTypes.any
};



export default NavBar
export { MenuItem }

