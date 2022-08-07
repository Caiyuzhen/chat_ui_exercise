import React from 'react'
import PropTypes from 'prop-types'
import StyleEmoji from './style'



function Emoji({
		label,  	//让 emoji 变成图片，这样使用阅读器的人就能听到这个 enmoji 的含义
		children,	//传递具体的 emoji表情
		...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyleEmoji 
		<StyleEmoji role='img' label={label} {...rest}> 
			{children}
		</StyleEmoji>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Emoji.propTypes = {
	children: PropTypes.any,
	label: PropTypes.string,
};



export default Emoji

