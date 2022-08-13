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
const GroupTitle = styled(Text).attrs({size: 'large', bold: 'bold'})`
`

//性别与地区的包裹容器
const GenderAndRegionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr; //🔥🔥🔥评分两个空间
	justify-items: space-between;
`

//三个下拉菜单的分组
const SelectGroup = styled.div`
	> * {
		margin: 0 12px;//拉开间距
	}
	margin: 0 -12px; //抵消【第一个】跟【最后一个】的边距
`

//社交信息的样式
const StyledSocialIconInput = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr; //🔥🔥🔥前面的图标占据 40px 右侧的输入框占据 剩余所有空间
	align-items: end;
`


export default StyledEditProfile
export {GroupTitle,GenderAndRegionContainer,SelectGroup,StyledSocialIconInput}