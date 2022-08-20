// import PropTypes from 'prop-types';
import React  from 'react';
import Avatar from "components/Avatar";
import Badge from 'components/Badge';
import StyledNavBar, { StyledALLMenuItem, StyledMenuItems, MenuIcon } from './style';
import { faCommentDots, faUsers, faFolder, faStickyNote, faEllipsisH, faCog } from "@fortawesome/free-solid-svg-icons";
import profileImage from "assets/images/face-female-3.jpg";//注意，这里不是个 {} !!
import "styled-components/macro";
import { Link, Route, Routes } from 'react-router-dom'




//🔥侧导航整体(包含 avatar、tab items)
function NavBar({...rest}) {
	return (

		<StyledNavBar {...rest}> 
			<Avatar src={profileImage} status='online'/>
			{/* ⚡️⚡️只要让 Nav 导航的 link to 属性匹配到 ChatAPP 的 Route 就可以跳转 */}
			<StyledMenuItems>
				<MenuItem to="/" showBadge active icon={faCommentDots}/>	
				<MenuItem to='/contacts' icon={faUsers}/>
				<MenuItem to='/files' icon={faFolder}/>
				<MenuItem to='/notes' icon={faStickyNote}/>
				<MenuItem icon={faEllipsisH}/>
				<MenuItem to='/settings' icon={faCog} css={`align-self:end;`}/>	
			</StyledMenuItems>

		</StyledNavBar>
	)
}




//侧导航 Tab
function MenuItem({
	to='/', //用于接收路由路径！！记得定义默认的路径！！！
	icon, 
	active, 
	showBadge, 
	...rest}){ //图标、是否高亮、是否显示红点, 剩余属性


	return(	
		//active用来控制是否展示底色
		<StyledALLMenuItem active={active} {...rest}>
			{/* 因为 tab 需要可以点击，所以使用 href, 后续会换成用 React-Router 的 Link 标签进行渲染, 比普通的 a 标签多了路由功能*/}
			{/* <a href="#">	 */}
			<Link to={to}>
				{/* Badge 组件有子内容时候就会显示数字,active 用来控制是否激活底色 */}
				<Badge show={showBadge}>
					<MenuIcon active={active} icon={icon}/>
				</Badge>
			</Link>
			{/* </a> */}
		</StyledALLMenuItem>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
// NavBar.propTypes = {};



export default NavBar


