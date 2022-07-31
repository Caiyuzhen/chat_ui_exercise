import React from 'react'
import PropTypes from 'prop-types'
import StyledFilter, { Action, FilterItems } from './style'
import Text from 'components/Text'



function Filter({children,...rest}) {
	return (
		// 👇把其他所有 ...rest 属性交给 StyleFilter 
		<StyledFilter {...rest}> 
			{children}
		</StyledFilter>
	)
}



//⚡️⚡️把 FilterItems 作为 Filter 的子组件来导出
Filter.FilterItems = ({children, label, ...rest}) => {
	<FilterItems {...rest}>
		<Text type='secondary'>{label}: </Text>
		{children}
	</FilterItems>
}

Filter.Action = ({children, label, ...rest}) => {
	<Action {...rest}>
		<Text type='secondary'>{label}</Text>
		{children}
	</Action>
}






/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Filter.propTypes = {
	children: PropTypes.any,
	label: PropTypes.any,
};



export default Filter

