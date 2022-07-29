import React from "react";
import NavBar,{ MenuItem } from ".";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import 'styled-components/macro';//底层是使用 babelrc 来调用 css 属性



export default {
	title: "页面组件/NavBar",
	component: NavBar,
};


export const Default = () => <NavBar />


export const Menu = () => {
	return( 
		//想访问 styled 的 theme 但又不想写一个 style 组件，可以用 babelrc
		<div css={`
		       background-color: ${ ({theme})=>theme.darkPurple };
			   width:100px;		
			  `}>					
			<MenuItem showBadge active icon={faCommentDots}/>
		</div>
	)
}