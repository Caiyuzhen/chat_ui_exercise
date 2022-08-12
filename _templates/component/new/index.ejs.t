---
to: src/components/<%= name %>/index.js
# 👆表示组件的 【路径】 和 【从命令行中取出来的名称】 
---



import React from 'react'
import PropTypes from 'prop-types'
import Styled<%= name %> from './style'



function <%= name %>({children,...rest}) {

	return (
		# // 👇把其他所有 ...rest 属性交给 Styled<%= name %> 
		<Styled<%= name %> {...rest}> 
			{children}
		</Styled<%= name %>>
	)
}



# /*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
<%= name %>.propTypes = {
	children: PropTypes.any
};



export default <%= name %>

