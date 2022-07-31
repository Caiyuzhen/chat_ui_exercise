import React from 'react'
import PropTypes from 'prop-types'
import StyleButton from './style'



function Button({
		type='primary',  //颜色
		shape='square',  //造型
		size='30px',	 //尺寸
		bgColor,  		//背景色
		...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleButton 
		<StyleButton 
			type={type} 
			shape={shape} 
			size={size} 
			color={bgColor} 
			{...rest }> 
			
		</StyleButton>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Button.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(['primary']),
	shape: PropTypes.oneOf(['circle', 'square']),
	size: PropTypes.string,
};



export default Button

