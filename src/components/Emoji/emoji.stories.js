import React from "react";
import Emoji from ".";

export default {
	title: "UI 组件/Emoji",
	component: Emoji
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
	<div>
		<Emoji label='smile'>😄</Emoji>
		<Emoji label='apple'>🍎</Emoji>
		<Emoji label='fish'>🐟</Emoji>
	</div>
)