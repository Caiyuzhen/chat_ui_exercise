import styled from "styled-components";
import CaretDown from "assets/icons/caret_down.svg"



const StyledSelect = styled.select`
	//自定义下拉菜单的图标
	appearance: none;

	//引入 icon 路径
	background-image: url(${CaretDown});
	
	//禁止平铺
	background-repeat: no-repeat;

	//调整位置
	background-position: right center;
	padding-right: 14px;

	//去掉边框跟背景色
	background-color: transparent;//透明
	border: none;

	//文字样式
	font-size:${ ({theme})=>theme.smallFont };
	color: ${ ({theme})=>theme.grayDark };


	//隐藏下拉菜单图标
	::-ms-expand {
		display: none;
	}
`;

export default StyledSelect;