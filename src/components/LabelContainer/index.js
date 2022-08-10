import React from 'react'
import PropTypes from 'prop-types'
import StyledLabelContainer from './style'


//专门用来布局的组件
function LabelContainer({children,label,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledLabelContainer 
		<StyledLabelContainer {...rest}> 
			{children}
		</StyledLabelContainer>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
LabelContainer.propTypes = {
	children: PropTypes.any
};



export default LabelContainer

