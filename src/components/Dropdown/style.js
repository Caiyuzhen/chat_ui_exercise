import StyledSperator from "components/Sperator/style"
import styled from "styled-components";



const StyledDropdown = styled.div`
	position: relative;
	cursor: pointer;
`;


const Container =styled.div`
	//🔥🔥🔥🔥判断点击 ... 后才展开下拉菜单
	display: ${({visible}) => (visible ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	justify-content:center;
	position: absolute;
	padding: 8px 8px;
	margin-top: 12px;
	background: ${({theme}) => theme.background};
	box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
	border-radius: 12px;
	white-space: nowrap;//🔥不折行,很关键！
	

	${StyledSperator}{//引入分割线的样式
		margin: 4px;
		/* width: calc(100% + 52px); */
		width: 100%;
	};


	//🔥🔥🔥
	${({ align }) => align } : 0;

`


const Items = styled.div`
	//hover 后，背景色改变
	padding:12px 20px;
	border-radius:8px;
	&:hover {
		background: ${({theme}) => theme.gray5};
	}
`



export default StyledDropdown;
export {Container,Items};