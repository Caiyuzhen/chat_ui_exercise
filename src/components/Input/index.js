import React from 'react'
import PropTypes from 'prop-types'
import StyledInput, { InputContainer, Prefix, Surfix } from './style'
import Icon from 'components/Icon'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { useTheme } from 'styled-components'
import InputText from './InputText'




//输入框
function Input({placeholder='请输入内容...', leftIcon, rightIcon, ...rest}) {
	return (
		<InputContainer {...rest}>
			{/* 👇有左 icon 才渲染 */}
			{leftIcon && <Prefix>{leftIcon}</Prefix>}
			
			<StyledInput placeholder={placeholder}/>

			{/* 👇有右边 icon 才渲染 */}
			{rightIcon && <Surfix>{rightIcon}</Surfix>}
		</InputContainer>

	)
}


//搜索框
function Search({placeholder='请输入搜索内容...', ...rest}) {//如果 rest 传入了相同的属性，则会覆盖前者的属性
	//修改自定义的组件属性
	const theme = useTheme()
	return(
		<Input 
			placeholder={placeholder}
			leftIcon={
				<Icon icon={SearchIcon} color={theme.gray3} width={18} height={18}/>
			}
			{...rest}
		/>
	)
}



//🔥🔥🔥把 Search 组件当作 Input 组件的子组件！！
Input.Search = Search


//🔥🔥🔥把 InputText 组件当作 Input 组件的子组件！！
Input.Text = InputText








/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Input.propTypes = {
	placeholder: PropTypes.any,
	leftIcon: PropTypes.any,
	rightIcon: PropTypes.any,
};



export default Input

