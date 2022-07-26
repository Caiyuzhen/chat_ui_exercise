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
Filter.FilterItems = ({children, label, ...rest}) => (
	<FilterItems {...rest}>
		<Text type='secondary'>{label}: </Text>
		{children}
	</FilterItems>
)



//⚡️⚡️把 Action 作为 Filter 的子组件来导出
Filter.Action = ({children, label, ...rest}) => (
	<Action {...rest}>
		{/* 🪵🪵注意，这里调用了组件，所以在 style.js 内要更改样式得用 ${StyledText}{} 并进行 import！！！ */}
		<Text type='secondary'>{label}</Text>
		{children}
	</Action>
)







/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Filter.propTypes = {
	children: PropTypes.any,
	// label: PropTypes.any,
};



export default Filter

