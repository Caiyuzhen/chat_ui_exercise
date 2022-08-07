import React from 'react'
import PropTypes from 'prop-types'
import StyleFooter, { EmojiPopover, IconContainer } from './style'
import Popover from 'components/Popover'
import Input from 'components/Input'
import Icon from 'components/Icon'
import { ReactComponent as ClipIcon } from 'assets/icons/clip.svg'
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { ReactComponent as MicroPhone } from 'assets/icons/microphone.svg'
import { ReactComponent as PlaneIcon } from 'assets/icons/plane.svg'
import { useTheme } from 'styled-components'
import Button from 'components/Button'



function Footer({
	visible,   	//是否显示 emoji 弹出框
	content,	  //emoji 弹出框的内容
	children,
	...rest}) 
	{

	const theme = useTheme()

	return (
		// 👇把其他所有 ...rest 属性交给 StyleFooter 
		<StyleFooter {...rest}> 
			<EmojiPopover visible={visible} >
				<Popover visible={visible} content={content} />
			</EmojiPopover>

			<Input
				placeholder='Input some friendly message...'
				leftIcon={<Icon icon={ClipIcon} color={theme.gray3}/>}
				//🔥🔥🔥因为右侧要接收三个 Icon，所以要在 style 里边定义一个容器组件！
				rightIcon={
					<IconContainer>
						<Icon icon={SmileIcon} color={theme.primaryColor} />
						<Icon icon={MicroPhone} color={theme.gray3}/>
						<Button shape='circle' size='54px' type='primary'>
							<Icon icon={PlaneIcon} color={theme.white} style={{transform:'translateX(-2px)'}}/>
						</Button>
					</IconContainer>
				}
			/>

		</StyleFooter>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Footer.propTypes = {
	children: PropTypes.any
};



export default Footer

