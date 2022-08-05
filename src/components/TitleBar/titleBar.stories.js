import React from "react";
import TitleBar from ".";
import face3 from 'assets/images/face-male-3.jpg'

export default {
	title: "UI 组件/TitleBar",
	component: TitleBar
};

export const Default = () => (
	<TitleBar
		avatarSrc={face3}
		name={Jimmy}
		statusText='离线'
		time='3小时前'
	/>
)