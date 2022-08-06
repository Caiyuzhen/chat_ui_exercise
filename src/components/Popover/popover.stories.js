import Button from "components/Button"
import React from "react";
import Popover from ".";

export default {
	title: "UI 组件/Popover",
	component: Popover
};

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