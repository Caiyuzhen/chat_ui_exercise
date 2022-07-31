import styled,{css} from "styled-components";




//字体样式变体 —— 颜色
const typeVariants = {
	primary: css`
		color: ${( {theme} )=>theme.grayDark};
	`,
	secondary: css`
		color: ${( {theme} )=>theme.grayDark};
		opacity: 0.3;
	`,
	danger: css`
		color: ${( {theme} )=>theme.red};
	`,
}



//字体样式变体 —— 大小
const sizeVariants = {
	xxsmall: css`
		${( {theme} )=>theme.xxsmallFont};
	`,
	xsmall: css`
		${( {theme} )=>theme.xsmallFont};
	`,
	small: css`
		${( {theme} )=>theme.smallFont};
	`,
	normal: css`
		${( {theme} )=>theme.normalFont};
	`,
	medium: css`
		${( {theme} )=>theme.mediumFont};
	`,
	large: css`
		${( {theme} )=>theme.largeFont};
	`,
	xlarge: css`
		${( {theme} )=>theme.xlargeFont};
	`,
	xxlarge: css`
		${( {theme} )=>theme.xxlargeFont}
	`,
}


//设置为 span 的 div 
//🌟🌟判断条件，应用对应的样式
const StyledText = styled.span`
	//有传值则取传入的，无则取默认
	font-size: ${( {size} ) => sizeVariants[size] || sizeVariants.normal};  
	${( {type} ) => typeVariants[type] };
	${( {bold} ) => bold && `font-weight: 500` };   //🔥🔥 && 表示如果传入了 bold 属性，则把 bold 的字体设置为 500 加粗
`


export default StyledText;