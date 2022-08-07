import React from "react";
import Footer from ".";

export default {
	title: "UI 组件/Footer",
	component: Footer
};

export const Default = () => (
	// 这个 div 是为了给 Emoji 的 Popover 留出空间来展示的
	<div style={{marginTop: 80}}>
		<Footer />
	</div>
)