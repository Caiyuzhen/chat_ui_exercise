import React from "react";
import Settings, {SettingItems} from ".";

export default {
	title: "页面组件/Settings",
	component: Settings
};


//默认的整体设置组件
export const Default = () => <Settings/>




//没有描述信息的设置项
export const WithoutDescribtion = () => (
	<SettingItems label='这是一个没有描述信息的设置 Item'/>
)



//有描述信息的设置项
export const WithDescribtion = () => (
	<SettingItems 
		label='这是一个有描述信息的设置 Item'
		description='这是一串很长很长很长很长很长很长很长很长很长的描述信息'
	/>
)



//有描述信息 + 开关的设置项
export const WithDesAndSwitch = () => (
	<SettingItems 
		label='这是一个有开关的设置 Item'
		type='switch'
		description='这是一串很长很长很长很长很长很长很长很长很长的描述信息'
	/>
)



//有描述信息 + 下钻二级页面的设置项
export const WithDesAndChildrenPage = () => (
	<SettingItems 
		label='这是一个有二级页的设置 Item'
		type='menu'
		description='这是一串很长很长很长很长很长很长很长很长很长的描述信息'
	/>
)