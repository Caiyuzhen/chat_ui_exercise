import React from 'react'
import PropTypes from 'prop-types'
import StyleParagraph from './style'



function Paragraph({ellipsis, children,...rest}) {

	return (
		// 👇把 StyleParagraph 渲染为 p 标签
		<StyleParagraph as='p' ellipsis={ellipsis} {...rest}> 
			{children}
		</StyleParagraph>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Paragraph.propTypes = {
	children: PropTypes.any,
	ellipsis: PropTypes.bool,
};



export default Paragraph

