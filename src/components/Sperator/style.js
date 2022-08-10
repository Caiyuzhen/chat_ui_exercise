import styled from "styled-components";

const StyledSperator = styled.div`
	width:100%;
	height: 1px;
	border-bottom: 1px solid ${({theme})=>theme.gray4};//分割线颜色
`;



export default StyledSperator;