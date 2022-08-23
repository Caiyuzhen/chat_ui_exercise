import styled,{css} from "styled-components";



const StyledChatApp = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
`;


//左侧导航
const Nav = styled.nav`
	/* 禁止导航缩小 */
	flex-shrink: 0;
	z-index:100;
`;


//左侧 feed
const SidebarFeed = styled.aside`
	max-width: 400px;
	min-width: 320px;
	height:100vh;
	background: ${({theme}) => theme.grediantGray};//左侧 feed 加个投影背景
	flex: 1;//填充满可用空间

	position: relative;
	z-index: 50;
	> div { //设置侧边栏内的每一个组件
		will-change: transform, opacity; //开启 GPU 加速
		position: absolute;
		width: 100%;
	}
`;


// 对话区域
const Content = styled.main`
 	position: relative;
	 width: 100%;
	/* flex: 1;//填充满可用空间 */
`;


// //右侧边栏
// const Drawer = styled.div`
// 	max-width: 320px;

// 	//👇默认为 0 px, 点击后展开
// 	//🌟写法一：
// 	${({show}) => show ? `width: 320px;` : `width:0px;`}

// 	//🌟写法二：
// 	/* ${({show}) => show && css`width:320px`} */
	
// `;



export default StyledChatApp;
export {Nav, Content, SidebarFeed}