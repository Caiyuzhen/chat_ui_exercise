import styled from "styled-components";
import arrowRight from "assets/icons/arrowRight.svg";
import Icon from "components/Icon"


//整体 profile 的样式
const StyledProfile = styled.div`
	display: grid;
	align-content: start; //水平靠上对齐
	justify-content: center;
		justify-items: center; //子元素垂直居中
	position: relative;
	padding: 28px;
	height: 100vh; //占满浏览器 100%
	margin-top: 2vh; //上边距占浏览器高度的 2%
	overflow-y: auto; //自动显示滚动条
`;



//社交 Icon 组件的样式
const StyledSocialLinks = styled.div`
	//整组按钮的布局
	& {
		display: flex;
	}
	//全部子按钮的布局
	& > * {
		margin: 20px 8px;
	}
`



//描述信息的样式
const StyledContactSections = styled.section`
	display: grid;
	/* grid-gap: 4px; */
`



//👇相册信息的样式
//相册组件整体容器
const AlbumSection = styled.section`
	justify-self: stretch; //🔥🔥🔥自己占满整个 profile 的宽度！
	display: grid;
	justify-content:space-between;//🔥🔥🔥自己的内容左右两边对齐
	align-items: center;
	padding: 0;
`

//相册标题+后面的链接
const AlbumTitle = styled.div`
	display: flex;
	justify-self: stretch;
	justify-content: space-between;
	align-items: center;

	& > a {//a 标签
		text-decoration: none;//去掉 a 标签的下划线
		font-size:${({theme}) => theme.noraml };
		color:${({theme}) => theme.primaryColor };

		&::after{//➡️箭头 icon
			display: inline-block;//因为要与文字放在同一行，所以要用 inline-block
			content: url(${arrowRight}); //🔥🔥🔥添加图标 icon 到 a 标签内！！！
			/* 填充arrowRight为白色 */
			margin-left: 4px;
		}
	}
`

//相册 Photos 整体容器
const Album = styled.div`
	width: 100%;
	display: grid;
	justify-self:start;//靠左对齐
	gap:12px;
	grid-template-columns: repeat(3,1fr); //🔥🔥🔥每行显示 3 列，平分空间！！
	margin-top:12px;
`

//具体的 Photo
const PhotoImg = styled.img`
	width: 120px;
	height: 120px;
	object-fit: cover;//自动填满整个蒙版
	border-radius: 12%;
	transition: 0.4s;
	:hover{
		transform: scale(1.1);
	}
`

//关闭按钮
const CloseIcon = styled(Icon).attrs({opacity: 0.3})`
	position: absolute;
	right:28px;
	top:28px;
	cursor:pointer;
`;




export default StyledProfile
export { 
	StyledSocialLinks,
	StyledContactSections,
	AlbumSection,
	AlbumTitle,
	Album,
	PhotoImg,
	CloseIcon,
}