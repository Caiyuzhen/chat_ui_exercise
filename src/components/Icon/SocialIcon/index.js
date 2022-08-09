import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SocialIcon({icon, size, bgColor, href, ...rest}) {

  return (
	<Button
	    shape='square'
		size={size}
		bgColor={bgColor}
		// 点击跳转，如果有 hrefLink 信息就跳转
		onClick={() => href && window.open(href, '_blank')} //如果有链接则跳转到对应的链接
		{...rest}
	>
		<FontAwesomeIcon icon={icon} style={{fontSize: '16px'}}/>
	</Button>
  )
}




SocialIcon.propTypes = {
	icon: PropTypes.elementType,//类型检查为 React 组件
	bgColor: PropTypes.string,
	href: PropTypes.string,
}


export default SocialIcon
