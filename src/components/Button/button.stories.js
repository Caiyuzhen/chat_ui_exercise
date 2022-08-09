import Icon from "components/Icon"
import React from "react";
import Button from ".";
import { ReactComponent as Plus} from "assets/icons/plus.svg"

export default {
	title: "UI 组件/Button",
	component: Button
};

export const RectButtonAuto = () => 
	<Button type='primary' shape='square'>圆角按钮</Button>


export const RectButtonFixed = () => 
	<Button type='primary' shape='squareFixed' width='120px' height='32px'>圆角按钮</Button>


export const CircleButton = () => 
	<Button type='primary' shape='circle' size='60px'>
		{/* icon 内部形状的尺寸 */}
		<Icon icon={Plus} size={16} weight={16}></Icon>
	</Button>
	
	