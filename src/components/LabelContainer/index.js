import React from 'react'
import PropTypes from 'prop-types'
import StyledLabelContainer from './style'
import Text from 'components/Text'


//专门用来布局的组件（上下排列的输入列表，包含标题跟输入框）
function LabelContainer({children,label,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledLabelContainer 
		<StyledLabelContainer {...rest}> 
			{/* 👇有 label 就显示 label，无则不显示 */}
			{ label && <Text style={{marginBottom: '8px'}}> {label} </Text>}
			{ children }
		</StyledLabelContainer>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
LabelContainer.propTypes = {
	children: PropTypes.any
};



export default LabelContainer

