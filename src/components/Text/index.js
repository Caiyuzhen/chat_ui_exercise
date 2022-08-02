import React from 'react'
import PropTypes from 'prop-types'
import StyledText from './style'



function Text({children, type='primary', size='normal', bold, ...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleText 
		<StyledText type={type} size={size} bold={bold} {...rest}> 
			{children}
		</StyledText>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Text.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
	size: PropTypes.oneOf([
		'xxsmallFont',
		'xsmallFont',
		'smallFont',
		'normalFont',
		'mediumFont',
		'largeFont',
		'xlargeFont',
		'xxlargeFont',]),
	bold: PropTypes.bool,
};



export default Text

