import React from 'react'
import PropTypes from 'prop-types'
import Icon from '..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SocialIcon({icon, bgColor, hrefLink, ...rest}) {
  return (
	<Button
		type='circle'
		size='28px'
		bgColor={bgColor}
		onclick={() => hrefLink && window.open(hrefLinkhrefLink, '_blank')} //如果有链接则跳转到对应的链接
	>
		<FontAwesomeIcon icon={icon} style={{fontSize: '16px'}}/>
	</Button>
  )
}




index.propTypes = {
	icon: PropTypes.elementType,//类型检查为 React 组件
	bgColor: PropTypes.string,
	hrefLink: PropTypes.string,
}


export default index
