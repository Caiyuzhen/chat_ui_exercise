import React from "react";
import Input from ".";
import Icon from "components/Icon"
import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";



export default {
	title: "输入组件/Input",
	component: Input,
};




export const Default = () => <Input/>

//🔥🔥访问搜索框的子组件 Search=>Input
export const Search = () => <Input.Search/>


export const withAllIcons = () => (
	<Input 
		leftIcon={<Icon icon={ClipIcon} color="#3370ff"/>}
		rightIcon={<Icon icon={SmileIcon} color="#3370ff"/>}
	/>
)
