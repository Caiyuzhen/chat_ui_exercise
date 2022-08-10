import styled from "styled-components";

//整体 profile 的样式
const StyledProfile = styled.div`
	display: grid;
	align-content: start; //水平靠上对齐
	justify-content: center;
		justify-items: center; //子元素垂直居中
	position: relative;
	padding: 28px;
	height: 100vh; //占满浏览器 100%
	margin-top: 2vh; //上边距占浏览器高度的 2%
	overflow-y: auto; //自动显示滚动条
`;


//社交组件的样式
const StyledSocialLinks = styled.div`
	//整组按钮的布局
	& {
		display: flex;
	}
	//全部子按钮的布局
	& > * {
		margin: 20px 8px;
	}
`


//描述信息的样式
const StyledContactSections = styled.section`
	display: grid;
	grid-gap: 4px;
`



export default StyledProfile
export { StyledSocialLinks,StyledContactSections }