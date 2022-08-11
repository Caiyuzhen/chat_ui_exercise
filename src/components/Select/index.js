import React from 'react'
import PropTypes from 'prop-types'
import StyledSelect from './style'
import LabelContainer from 'components/LabelContainer'


//下拉表单
function Select({
	type,   //定义 Variants，来判断显示什么类型的 icon 
	label,  //判断是否显示顶部标题
	children,
	...rest
	}) {
	
	const selectWithoutTitle = (<StyledSelect type={type} {...rest}> {children} </StyledSelect>)

	//有 label，则用 label 组件来包裹整个 select 组件
	return label ? (
		<LabelContainer label={label}> {selectWithoutTitle} </LabelContainer> 
		) : (selectWithoutTitle)
}







Select.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(['form']),
	label: PropTypes.string,
};



export default Select

