import styled, {css} from "styled-components";
import CaretDown from "assets/icons/caret_down.svg"
import CaretDown2 from "assets/icons/caretDown2.svg";


//下拉菜单的 icon 变体
const typeVariants = {
	form: css`
		background-image :url(${CaretDown2});
	`,
};




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

	//根据 type 来显示下拉菜单的样式，有 type 则为另一种样式
	${({type}) => type && typeVariants[type]} //有则显示

	//隐藏下拉菜单的默认图标
	::-ms-expand {
		display: none;
	}
`;

export default StyledSelect;