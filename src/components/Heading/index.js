import React from 'react'
import PropTypes from 'prop-types'
import StyleHeading from './style'



function Heading({children, level, ...rest}) {

	return (
		// 🔥as={`h${level}`} 表示 h 几标题
		<StyleHeading as={`H${level}`} {...rest}> 
			{children}
		</StyleHeading>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Heading.propTypes = {
	children: PropTypes.any,
	level: PropTypes.oneOf([1,2,3,4,5,6]),
};



export default Heading

