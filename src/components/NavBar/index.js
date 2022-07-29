import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "components/Avatar";
import Badge from 'components/Badge';
import StyledNavBar, {  StyledMenuItem, MenuItems, MenuIcon } from './style';
import { faCommentDots, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from "@fortawesome/free-solid-svg-icons";
import profileImage from "assets/images/face-female-3.jpg";//注意，这里不是个 {} !!
import "styled-components/macro";




//🔥侧导航整体(包含 avatar、tab items)
function NavBar({children,...rest}) {
	return (
		// 👇把</Avatar>其他所有 ...rest 属性交给 StyleNavBar 
		<StyledNavBar {...rest}> 
			<Avatar src={profileImage} status='online'/>
				{/* 🌟用样式 MenuItems 组件包裹菜单项 MenuItem,注意这里有 s ！ */}
			<MenuItems>
				<MenuItem showBadge active icon={faCommentDots} />	
				<MenuItem icon={faUsers}/>
				<MenuItem icon={faFolder}/>
				<MenuItem icon={faStickyNote}/>
				<MenuItem icon={faEllipsisH}/>
				<MenuItem icon={faCog}/>	
			</MenuItems>
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
NavBar.propTypes = {};



export default NavBar
export { MenuItem }

