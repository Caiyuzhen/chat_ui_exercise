import Option from "components/Option"
import React from "react";
import Select from ".";

export default {
	title: "输入组件/Select",
	component: Select
};



//无标题的菜单
export const Default = () => 
	<Select>
		<Option>最新消息优先</Option>
		<Option>在线好友优先</Option>
	</Select>



//icon 为实心样式
export const FromSelect = () => {
	return(
		<Select type='form'>
			<Option>深圳</Option>
			<Option>上海</Option>
			<Option>广州</Option>
			<Option>深圳</Option>
		</Select>
	)
}


//🔥带有顶部标题的下拉菜单，icon 为实心样式
export const FromSelectWithLabel = () => {
	return(
		<Select label='今天中午吃什么' type='form' style={{width:'10%'}}>
			<Option>🍣🍣🍣</Option>
			<Option>🍚🍚🍚</Option>
			<Option>🌶️🌶️🌶️</Option>
			<Option>🍲🍲🍲</Option>
		</Select>
	)
}