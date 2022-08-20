import Paragraph from "components/Paragraph"
import React from "react";
import Dropdown from ".";




export default {
	title: "UI 组件/Dropdown",
	component: Dropdown
};


//下拉菜单的选项
const ItemsArr = ['个人资料', '关闭会话', '屏蔽此人']



export const Right = () => (
	<div style={{display: 'flex',  justifyContent: 'space-between', width:'50%'}}>
		<Paragraph>点击右侧按钮</Paragraph>
		<Dropdown align='left' content={ItemsArr}/> 
	</div>
)


export const Left = () => (
	<div style={{display: 'flex',  justifyContent: 'space-between', width:'50%'}}>
		<Paragraph>点击右侧按钮</Paragraph>
		<Dropdown align='right' content={ItemsArr}/> 
	</div>
)