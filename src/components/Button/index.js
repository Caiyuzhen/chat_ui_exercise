import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './style'



function Button({
		type='primary',  //颜色
		shape='square',  //造型
		size='30px',	 //长宽固定尺寸
		width='88px',	 //按钮宽度
		height='32px',	 //按钮高度
		bgColor,  		//背景色
		...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleButton 
		<StyledButton 
			type={type} 
			shape={shape} 
			size={size} 
			width={width}
			height={height}
			bgColor={bgColor} 
			{...rest }> 
		</StyledButton>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Button.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(['primary']),
	shape: PropTypes.oneOf(['circle', 'square']),
	size: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
};



export default Button

