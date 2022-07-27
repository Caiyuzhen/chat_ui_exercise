import React from "react";
import Badge from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons"


export default {
	title: "UI 组件/Badge",
	component: Badge
};

export const Default = () => <Badge count={5}/>

export const DotVariant = () => {
	return(
		<Badge 
			show //不传值则是默认为 true
			variant='dot'>
			<FontAwesomeIcon icon={faCommentDots} style={{ fontSize:'24px' }}/>
		</Badge>
	)
}