import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledVideoCall, { Action, ActionGroup, BgGlass, Minimize, Self, VideoCallAlert } from './style'
import {faCompressAlt,faMicrophone,faPhoneSlash,faVolumeMute,faVideo,} from "@fortawesome/free-solid-svg-icons";
import videoCaller from 'assets/images/videoCaller.jpg'
import face1 from 'assets/images/face-male-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'
import 'styled-components/macro'


function VideoCall({
	onHangOffClicked,
	children,
	...rest}) {

	const [fullScreen, SetScreen] = useState(true) //默认为 false, 渲染为全屏状态

	if(!fullScreen){//如果为不是 true, 则渲染为小窗状态
		return (
			<VideoCallAlert draggable="true">
				{/* 小窗都单独在组件内写 css，因为避免覆盖大窗的样式 */}
				<Avatar src={face1} css={`grid-area: avatar;`}/>
				<Paragraph size='medium' bold={true} css={`grid-area: info;`}>Video call with XXX now</Paragraph>
				<Paragraph 
					type='secondary' 
					css={`grid-area: action; cursor:pointer;`}
					onClick={() => SetScreen(true)}
				>点击切换为全屏模式
					</Paragraph>
				<FontAwesomeIcon icon={faVideo} css={`grid-area:icon;  font-size:20px; path{fill:#6256FA}`}/>
			</VideoCallAlert>
		)
	}

	return (
		// 👇把其他所有 ...rest 属性交给 StyledVideoCall 
		<StyledVideoCall src={videoCaller} {...rest}> 
			<BgGlass/>
			{/* 👇最小化按钮, 点击后通过 hook 修改为最小化 */}
			<Minimize shape='square' onClick={() => SetScreen(false)}>
				<FontAwesomeIcon icon={faCompressAlt}/>
			</Minimize>
			<ActionGroup>
				<Action>
					<FontAwesomeIcon icon={faMicrophone} />
				</Action>
				{/* 🔥🔥绑定 onHangOffClicked 参数, 向上一层 Conversation 传递, 点击时关闭页面 */}
				<Action type='hangOff' onClick={onHangOffClicked}>
					<FontAwesomeIcon icon={faPhoneSlash}/>
				</Action>
				<Action>
					<FontAwesomeIcon icon={faVolumeMute}/>
				</Action>
			</ActionGroup>
			<Self src={face1} size='112px'/>
			
		</StyledVideoCall>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
VideoCall.propTypes = {
	children: PropTypes.any
};



export default VideoCall

