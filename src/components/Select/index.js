import React from 'react'
import PropTypes from 'prop-types'
import StyleSelect from './style'



function Select({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleSelect 
		<StyleSelect {...rest}> 
			{children}
		</StyleSelect>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Select.propTypes = {
	children: PropTypes.any
};



export default Select

