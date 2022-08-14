import styled from "styled-components";



//整体的样式
const StyledSettings = styled.div``;


//每个分组的大容器
const StyledSettingGroup = styled.div`
	margin-bottom: 20px;
	/* 内间距为 72px */
	padding: 48px 48px 0px 48px;
`

//设置项 Item 的容器
const StyledSettingItems = styled.div``;


//用来布局设置项的开关或者右箭头
const SettingItemControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`



export default StyledSettings
export {StyledSettingItems,SettingItemControl,StyledSettingGroup}