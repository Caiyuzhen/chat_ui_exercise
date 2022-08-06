import styled from "styled-components";



//整体 Popover
const StyledPopover = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
`;


//Popover 内的内容,内容设置为绝对定位，方便定位距离
const Content = styled.div`
	background-color: ${({theme})=>theme.background};
	border-radius: 12px;
	box-shadow: 0 8px 40px rgba(0,0,0,.12);
	padding: 12px 30px;
	position: absolute;

	/* css3 的计算属性 calc()，可以动态计算一些值！！ */
	bottom:calc(100% + 12px);//100% 表示取 StyledPopover 容器的高度(因为按钮占满了高度，所以也是按钮本身的高度），然后再去 +12px
`


//Popover 的小箭头
const Triangle = styled.div`
	/* 下面👇css写三角形的套路  */
	position: absolute;
	width: 0;
	height: 0;
	border-style:solid;
	border-width: 6px 6px 0 6px; //去掉下边一个点
	border-color:${({theme})=>theme.background} transparent transparent transparent; //不显示左右跟下边的三角形
	left: calc(50% - 6px);//三角形居中
	bottom:calc(100% + 7px);//让三角形贴在 Popover 内容区域的上面，要排除掉自身的高度 6px
	/* 👆计算方法：
		100% + 12px -5px 
		也就是 100% 的高度 + 12px 的 content 偏移高度再 - 5px 的自身高度 （三角形 6px -1px），1px 用来压在 content 区域上
	*/
`;


//Popover 的目标对象
const Target = styled.div``;






export default StyledPopover;
export {Content, Target, Triangle};