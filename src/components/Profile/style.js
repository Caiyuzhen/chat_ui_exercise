import styled from "styled-components";

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



export default StyledProfile;