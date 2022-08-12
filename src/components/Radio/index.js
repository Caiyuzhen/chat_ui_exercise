import React from 'react'
import PropTypes from 'prop-types'
import StyledRadio, { Circle, RadioButton, StyledRadioGroup } from './style'
import LabelContainer from 'components/LabelContainer'


//一个单选按钮
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


//一组单选按钮,label 为标题
function RadioGroup({label, children,...rest}) {
	return (
		//排版组件
		<LabelContainer label={label}>
			<StyledRadioGroup {...rest}>
				{children}
			</StyledRadioGroup>
		</LabelContainer>
	)
}




//把 RadioGroup 作为 Radio 的子组件进行导出
Radio.Group = RadioGroup



Radio.propTypes = {
	name: PropTypes.string,
	label: PropTypes.string,
	children: PropTypes.any,
};



export default Radio

