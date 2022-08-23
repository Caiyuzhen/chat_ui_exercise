import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyleFooter, { StyledPopoverContent, IconContainer } from './style'
import { ReactComponent as ClipIcon } from 'assets/icons/clip.svg'
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { ReactComponent as MicroPhone } from 'assets/icons/microphone.svg'
import { ReactComponent as PlaneIcon } from 'assets/icons/plane.svg'
import { ReactComponent as OptionsIcon} from 'assets/icons/options.svg'
import { useTheme } from 'styled-components'
import Button from 'components/Button'
import Emoji from 'components/Emoji'
import Popover from 'components/Popover'
import Input from 'components/Input'
import Icon from 'components/Icon'




//底部消息输入框
function Footer({
	animeProps,
	style,
	content,	  //popover 浮层的内容(emoji )
	children,
	...rest}) 
	{

	const theme = useTheme()
	// const [emojiIconActive, setEmojiIconActive] = useState(false) //用 useState 来管理状态，判断emoji 图标是否激活, 没激活的话就变灰色
	const [emojiIconActive, setEmojiIconActive] = useState(false);



	return (
		// 👇把其他所有 ...rest 属性交给 StyleFooter 
		<StyleFooter style={{...style, ...animeProps}} {...rest}> 
			<Input
				placeholder='Input some friendly message...'
				leftIcon={<Icon icon={ClipIcon} color={theme.gray3}/>}
				//🔥🔥🔥因为右侧要接收三个 Icon，并且要置入 emoji Picker，所以要在 style 里边定义一个容器组件！
				rightIcon={
					<IconContainer>
						{/* 右侧三个操作按钮*/}
						{/* 其中一个按钮点击后会弹出 Emoji 浮层 */}
						<Popover 
							content={<EmojiPopoverContent/>} 
							offset={{x:'-25%'}}
							onVisible={() => setEmojiIconActive(true)} //⚡️⚡️⚡️⚡️⚡️结合之前 Popover 会执行的函数，来使用 useState hook 去改变状态！！
							onHide={() => setEmojiIconActive(false)}   //⚡️⚡️⚡️⚡️⚡️结合之前 Popover 会执行的函数，来使用 useState hook 去改变状态！！
							>
							{/* 👇👇👇👇配合上面的 state 变化，去判断 emoji 需要用什么颜色！！ */}
							<Icon icon={SmileIcon} style={{cursor: 'pointer'}} color={ emojiIconActive ? theme.primaryColor: theme.gray3} />
							
						</Popover>
						
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




//Emoji 面板
function EmojiPopoverContent(props){
	return(
		<StyledPopoverContent>
			<Emoji label='emoji'>😄</Emoji>
			<Emoji label='grinning'>😆</Emoji>
			<Emoji label='smilewithsunglasses'>😎</Emoji>
			<Emoji label='thumbup'>👍</Emoji>
			<Emoji label='ok'>👌</Emoji>
			<Emoji label='handsputtogether'>🙏</Emoji>
			<Emoji label='flexedbicep'>💪</Emoji>
			<Icon icon={OptionsIcon} style={{marginLeft:'24px'}}/>
		</StyledPopoverContent>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Footer.propTypes = {
	children: PropTypes.any
};



export default Footer

