import StyledText from "components/Text/style"
import styled from "styled-components";


//整体 div
const StyledFilter = styled.div`
	display: grid;
	grid-template-columns:2fr 1fr; //下拉菜单占 2/3 , 按钮占 1/3 的空间;
	align-items: center;
`;


//左侧过滤菜单
const FilterItems = styled.div`
	cursor: pointer;
	min-width: 140px;
`;


//右侧 Add 按钮
const Action = styled.div`
	justify-self: end; //对齐右侧
	min-width: 140px;
	/* 🪵🪵注意，因为在 index.js 调用了 Text 组件，所以在 style.js 这里要更改样式得用 ${StyledText}{} 并进行 import！！！ */
	${StyledText}{  
		padding-right:1rem;
		/* 更改字体颜色 */
		/* color: #3370FF; */
	}
`;





//需要被作为 html 渲染的话就要 export
export default StyledFilter;
export {FilterItems, Action};
