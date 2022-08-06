import React from 'react'
import PropTypes from 'prop-types'
import StylePopover, { Content, Target, Triangle } from './style'



function Popover({
	content,   //Popover 内的内容，可以是文本、其他组件
	offset,    //指向的偏移位置
	children,
	...rest}
	
	) {

	return (
		// 👇把其他所有 ...rest 属性交给 StylePopover 
		<StylePopover {...rest}> 
			{/* Popover 的内容，可以是文本、其他组件比如图片等 */}
			<Content>{content}</Content>
			<Triangle />
			<Target>{children}</Target>
		</StylePopover>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Popover.propTypes = {
	children: PropTypes.any
};



export default Popover

