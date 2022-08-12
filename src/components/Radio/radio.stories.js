import React from "react";
import Radio from ".";

export default {
	title: "输入组件/Input/Radio",
	component: Radio
};


//单个 Radio
export const DefaultRadio = () => <Radio>选项</Radio>

//一组 Radio
export const RadioGroup = () => (
	//🌈🌈 name 需要时一样的才能互斥！！！
	<Radio.Group label="请选择中午吃什么">
		<Radio name='option'>🥥 套餐 A</Radio>
		<Radio name='option'>🍗 套餐 B</Radio>
		<Radio name='option'>🍔 套餐 C</Radio>
	</Radio.Group>
)