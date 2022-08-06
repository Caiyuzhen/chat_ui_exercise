import React from 'react'
import PropTypes from 'prop-types'
import StyleVoiceMessage from './style'
import {ReactComponent as Play} from 'assets/icons/play.svg'
import {ReactComponent as Wave} from 'assets/icons/wave.svg'
import Icon from 'components/Icon'
import { useTheme } from 'styled-components'
import Text from 'components/Text'
import Button from 'components/Button'



function VoiceMessage({time,type,children,...rest}) {
	const theme = useTheme()

	return (
		// 👇把其他所有 ...rest 属性交给 StyleVoiceMessage 
		//type 用来判断是自己发送的语音还是他人发送的语音
		<StyleVoiceMessage type={type} {...rest}> 
			<Button size='40px' shape='circle'>
				<Icon icon={Play} width='14px' height='16px' color='white' style={{transform:'translateX(1px)'}}/>
			</Button>
			<Icon icon={Wave} width='100%' height='100%' color={theme.primaryColor}/>
			<Text type='secondary' bold>{time}</Text>
		</StyleVoiceMessage>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
VoiceMessage.propTypes = {
	children: PropTypes.any,
	type:PropTypes.oneOf(['mine']),
	time:PropTypes.string,
};



export default VoiceMessage

