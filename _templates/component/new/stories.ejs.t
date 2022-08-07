---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
# 👆因为 stories 需要小写开头
---


import React from "react";
import <%= name %> from ".";

export default {
	title: "<%= name%>",
	component: <%= name%>
};


export const Default = () => <<%= name%>>默认</<%= name%>>