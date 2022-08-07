import Button from "components/Button"
import React from "react";
import Popover from ".";

export default {
	title: "UI 组件/Popover",
	component: Popover
};


//没有偏移的 Popover
export const Default = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height:"50vh",
		}}>
		<Popover content='Hello'>
			<Button shape='square'>点我</Button>
		</Popover>
	</div>
)




//带有偏移的 Popover
export const WithOffset = () => (
	//这个 div 是为了给 Popover 留出空间来展示的
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height:"50vh",
		}}>
		<Popover content='Hello' offset={{ x:'-25%', y:'1%' }}>
			<Button shape='square'>点我</Button>
		</Popover>
	</div>
)