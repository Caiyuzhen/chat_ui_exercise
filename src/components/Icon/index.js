// 👆表示组件的 【路径】 和 【从命令行中取出来的名称】 


import React from 'react'
import PropTypes from 'prop-types'
import StyleIcon from './style'


/*这些 props 属性都是可以自定义的
IconComponent 为别名，width 跟 height 不带单位，因为 svg 没有单位
*/
function Icon({
	icon: IconComponent, 
	width = 24, 
	height = 24, 
	color, 
	opacity, 
	...rest}) {

	return (			
	   // 👇把其他所有 ...rest 属性交给 StyleIcon 
	   <StyleIcon color={color} opacity={opacity} {...rest}> 
		  {IconComponent && <IconComponent/>}
	   </StyleIcon>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Icon.propTypes = {

};



export default Icon

