import styled from "styled-components";



const StyledRadio = styled.label`
	position:relative;
	display: inline-block;
	/* vertical-align: middle; */
	padding-left:20px;
	cursor: pointer;
	line-height: 20px;
	font-size:${({theme}) => theme.normalFont };
`




//具体的 Radio选项
const Circle = styled.span`
	line-height: 20px;
	width:16px;
	height:16px;
	border-radius:50%;//圆形
	border: 1px solid ${({theme}) => theme.primaryColor};
	position: absolute;
	left: 0;
	top: 0;

	::after{//选中的圆圈状态
		content: "";
		width:10px;
		height:10px;
		border-radius:50%;//圆形
		background-color:${({theme}) => theme.primaryColor};
		position: absolute;
		left:2px;
		top:2px;
		//显现缩放的动效
		/* opacity:0; */
		transition: 0.2s ease;
		transform: scale(0);
	}
`




//Radio 圆圈 + 文字 的整体按钮, 用下面自定义的 Circle 来替代原生的 input Radio 样式
const RadioButton = styled.input.attrs({type: "radio"})`//让输入框变成 Radio 的形态
	width: 0;
	height: 0;
	opacity: 0;

	//🌈🌈🌈 用 checked 伪类加上【 + 】这一邻居选择器来把 Circle 改成选中的样式
	//🔥🔥有个大坑！ checked  +  临近选择器跟图层有关系，要放在  Circle 的下面！！！！
	:checked + ${Circle}::after{
		opacity: 1;
		transform: scale(1);
	}
	
	//🌈🌈🌈 未选中的状态，not 为取反，反选伪类
	:not(:checked) + ${Circle}::after{
		opacity: 0;
		transform: scale(0);
	}
`


//RadioGroup 的样式
const StyledRadioGroup = styled.div`
	display: flex;
	& > *:not(:first-child){
		margin-left: 24px;
	}
`




/* css 样式 ： 
	input:checked {...} 
*/



export default StyledRadio;
export {RadioButton, Circle, StyledRadioGroup};