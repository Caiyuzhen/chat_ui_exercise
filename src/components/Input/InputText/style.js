import styled from "styled-components";

const StyledInputText = styled.div``;

const InputUnderline = styled.input`
	border: none;
	border-bottom: 2px solid ${({theme}) => theme.gray4};
	font-size: ${({theme}) => theme.normalFont};
	width: 100%;
	background: none;
	transition: all 0.4s;

	&::placeholder {
		color: ${({theme}) => theme.gray5};
	}

	//👇👇👇 hover 以及 focus 时候的样式
	:hover,
	:focus {
		border-bottom-color: ${({theme}) => theme.primaryColor};
	}
`



export default StyledInputText;
export {InputUnderline}