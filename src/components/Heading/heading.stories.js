import React from "react";
import Heading from ".";

export default {
	title: "文字/Heading",
	component: Heading
};

export const H1 = () => <Heading level={1}>一级标题</Heading>
export const H2 = () => <Heading level={2}>二级标题</Heading>
export const H3 = () => <Heading level={3}>三级标题</Heading>
export const H4 = () => <Heading level={4}>四级标题</Heading>
export const H5 = () => <Heading level={5}>五级标题</Heading>
export const H6 = () => <Heading level={6}>六级标题</Heading>
