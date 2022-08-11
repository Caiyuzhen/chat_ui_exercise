import React from 'react'
import PropTypes from 'prop-types'
import StyledInputText, { InputUnderline } from './style'
import LabelContainer from 'components/LabelContainer'



function InputText({
	label,   //用于判断有 label 则显示标题，无则只显示输入框
	placeholder='Input content...',
	...rest
}) {
	//🌟🌟用一个【常量】接收 InputUnderline 这个样式组件的渲染样式, InputUnderline 默认为 input 的样式
	const input = <InputUnderline type='text' placeholder={placeholder}/>

	return (
		//👇👇把其他所有 ...rest 属性交给 StyledInputText 
		<StyledInputText {...rest}> 
			{/* 
				👉👉如果有传入 labe 则显示包含标题的 LabelContainer 
				👉👉如果没有传入 label 则只显示上面那个 input 输入框
					👇相当于用排版组件，把标题夹到 input 内
			*/}
			{label ? <LabelContainer label={label}> {input} </LabelContainer> : input}
		</StyledInputText>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
InputText.propTypes = {
	children: PropTypes.any,
	label: PropTypes.string,
	placeholder: PropTypes.string,
};



export default InputText

