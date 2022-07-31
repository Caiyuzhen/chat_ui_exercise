import React from "react";
import Text from ".";

export default {
	title: "文字/Text",
	component: Text
};

export const DefaultFont = () => <Text>默认字体</Text>

export const SmallFont = () => <Text type='secondary' size="small">Small字体</Text>

export const SecondaryFont = () => <Text type='medium'>Medium 字体</Text>

export const LargeFont = () => <Text size="xxlarge" bold>Large 字体</Text>