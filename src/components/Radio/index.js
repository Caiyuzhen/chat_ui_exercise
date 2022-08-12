import React from 'react'
import PropTypes from 'prop-types'
import StyledRadio, { Circle, RadioButton } from './style'



function Radio({
	name, 	//name 一样的话，单选按钮才是互斥的关系
	children,
	...rest
  }) {

	return (
		<StyledRadio {...rest}> 
			{children}
			<RadioButton name={name}/>
			<Circle/>
		</StyledRadio>
	)
}




Radio.propTypes = {
	name: PropTypes.string,
	children: PropTypes.any
};



export default Radio

