import React from 'react'
import PropTypes from 'prop-types'
import StyledSwitch, { Checkbox,Slider } from './style'



function Switch({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledSwitch 
		<StyledSwitch {...rest}> 
			{children}
			<Checkbox/>
			<Slider/>
		</StyledSwitch>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Switch.propTypes = {
	children: PropTypes.any
};



export default Switch

