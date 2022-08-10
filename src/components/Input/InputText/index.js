import React from 'react'
import PropTypes from 'prop-types'
import StyledInputText from './style'



function InputText({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledInputText 
		<StyledInputText {...rest}> 
			{children}
		</StyledInputText>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
InputText.propTypes = {
	children: PropTypes.any
};



export default InputText

