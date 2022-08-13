import React from "react";
import Profile from ".";

export default {
	title: "页面组件/Profile",
	component: Profile
};


export const Default = () => (
	<Profile
		status='online'
		name='Amy Wang'
		area='Hong Kong'
		signature='Keep on going never give up 🚀.'
	/>
)


