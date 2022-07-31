import React from "react";
import Paragraph from ".";

export default {
	title: "排版/Paragraph",
	component: Paragraph
};

export const Default = () => (
<>
	<Paragraph>一段不省略的文本会折行一段不省略的文本会折行一段不省略的文本会折行一段不省略的文本会折行一段不省略的文本会折行</Paragraph>
	<Paragraph>一段不省略的文本会折行一段不省略的文本会折行一段不省略的文本会折行一段不省略的文本会折行一段不省略的文本会折行</Paragraph>
</>
)

export const Ellipsis = () => (
	<>
		<Paragraph ellipsis>一段超长的文本会省略一段超长的文本会省略一段超长的文本会省略一段超长的文本会省略一段超长的文本会省略</Paragraph>
	</>
)