import styled from "styled-components";
import Text from "components/Text";

const StyledEditProfile = styled.div`
	display: grid;
	grid-template-columns: 1fr;//只有一列
	row-gap: 20px;//行间距
	padding: 32px;
	max-height: 100vh;
	overflow-y: auto;//超出的内容显示垂直滚动条
`;

//标题
const GroupTitle = styled(Text).attrs({size: 'large'})`
`


export default StyledEditProfile;
export {GroupTitle}