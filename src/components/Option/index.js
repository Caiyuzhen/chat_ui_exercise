import React from 'react'
import PropTypes from 'prop-types'
import StyleOption from './style'



function Option({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleOption 
		<StyleOption {...rest}> 
			{children}
		</StyleOption>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Option.propTypes = {
	children: PropTypes.any
};



export default Option

