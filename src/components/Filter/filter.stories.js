import React from "react";
import Filter from ".";
import Icon from "components/Icon";
import Option from "components/Option";
import Select from "components/Select";
import Button from "components/Button";
import { ReactComponent as Plus} from "assets/icons/plus.svg";



export default {
	title: "UI 组件/Filter",
	component: Filter
};


export const Default = () => (
	<Filter>
		{/* 传参 */}
		<Filter.FilterItems label='列表排序'>
			<Select>
				<Option>最新消息优先</Option>
				<Option>在线好友优先</Option>
			</Select>
		</Filter.FilterItems>
		
		<Filter.Action label='创建会话'>
			<Button shape="circle">
				<Icon icon={Plus} width={14} height={14}/>
			</Button>
		</Filter.Action>
	</Filter>
)

