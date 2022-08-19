import styled from "styled-components";



const StyledChatApp = styled.div`
	display: flex;
	height: 100;
	width: 100;
	overflow: hidden;
	position: relative;
`;


//左侧导航
const Nav = styled.nav`
	/* 禁止导航缩小 */
	flex-shrink: 0;
`;


//左侧 feed
const SidebarFeed = styled.aside`
	max-width: 360px;
	min-width: 280px;
	flex: 1;//填充满可用空间
	background: ${({theme}) => theme.grediantGray};//左侧 feed 加个投影背景
`;


// 对话区域
const Content = styled.main``;


//右侧边栏
const Drawer = styled.div`
	max-width: 320px;
`;



export default StyledChatApp;
export {Nav, Drawer, Content, SidebarFeed}