import React from 'react'
import PropTypes from 'prop-types'
import StyledSperator from './style'



function Sperator({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledSperator 
		<StyledSperator {...rest}> 
			{children}
		</StyledSperator>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Sperator.propTypes = {
	children: PropTypes.any
};



export default Sperator

