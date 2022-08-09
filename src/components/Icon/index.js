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
	   		{/* 有传入 svg 才会生成*/}
			{IconComponent && <IconComponent width={width} height={height}/>}
	   </StyleIcon>
	)
}



//⚡️⚡️⚡️⚡️把 SocialIcon 导出为 Icon 的子组件！
//导出后通过 Social 的原型链就能访问到！
Icon.Social = SocialIcon




/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Icon.propTypes = {
	icon: PropTypes.element,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	color: PropTypes.string,
	opacity: PropTypes.number,
};



export default Icon

