import styled from "styled-components";

const StyledIcon = styled.div`
	display: inline-flex;//行内 flex 布局
	align-items: center;
	justify-content: center;

	//🔥🔥因为是设置成【行内】的 svg 样式，所以可以单独设置【颜色】跟【透明度】
	//给 svg 以及 svg 中的所有元素设置颜色
	//可以自定义控制 color 跟 opacity 的颜色，且当 color 跟 opacity 有值的时候才填充
	svg, 
	svg * {
		${ ({color})=>(color ? `fill: ${color}` : "" ) };
		${ ({opacity})=>(opacity ? `opacity: ${opacity}` : "") }
	}
`

export default StyledIcon;