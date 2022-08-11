import styled from "styled-components";

//输入框背景
const InputContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: ${( {theme} )=>theme.gray2};
	border-radius: 24px;
	padding:0px 30px;
`

//输入区域
const StyledInput = styled.input`
	width: 100%;//输入区域占满容器的父级
	height:48px;
	display: block;
	border: none;
	background: none;
	color: ${( {theme} )=>theme.grayDark};
	font-size: ${( {theme} )=>theme.mediumFont};
	&::placeholder{
		color: ${( {theme} )=>theme.gray3};
	}

`

//输入框左侧 icon
const Prefix = styled.div`
	margin-right:16px;
`

//输入框右侧 icon
const Surfix = styled.div`
	margin-left: 16px;
`


export {InputContainer,Prefix,Surfix}
export default StyledInput