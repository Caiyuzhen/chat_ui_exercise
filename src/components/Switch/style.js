import styled from "styled-components";




const StyledSwitch = styled.label`
	display: inline-block; //设置为 inline-block 让宽度跟高度生效
	width: 52px;
	height: 32px;
	position: relative;
`;


//Switch 的圆圈⭕️
const Slider = styled.span`
	background-color:${({theme}) => theme.gray4};
	position: absolute;
	/* 上下左右为 0 ，占满容器 */
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	border-radius: 16px;
	transition: .4s;

	&::before{
		display: block;
		content: '';
		position:absolute;
		width: 28px;
		height: 28px;
		top:1px;
		left:1px;
		background-color: white;
		box-shadow: 
			0px 4px 4px rgba(0,0,0,0.05),
			0px 2px 2px rgba(0,0,0,0.1),
			0px 4px 1px rgba(0,0,0,0.05);
		border-radius: 50%;
		transition: .4s;
	}
`


//实际控制 Switch 的 checkbox
const Checkbox = styled.input.attrs({type: "checkbox"})``





export default StyledSwitch;
export{ Slider, Checkbox }