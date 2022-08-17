import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledVideoCall, { Action, ActionGroup, Minimize, Self, VideoCallAlert } from './style'
import {faCompressAlt,faMicrophone,faPhoneSlash,faVolumeMute,faVideo,} from "@fortawesome/free-solid-svg-icons";
import videoCaller from 'assets/images/videoCaller.jpg'
import face1 from 'assets/images/face-male-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from 'components/Avatar'
import Paragraph from 'components/Paragraph'


function VideoCall({children,...rest}) {

	const [fullScreen, SetScreen] = useState(false) //默认为 false, 渲染为全屏状态

	if(fullScreen){//如果为 true, 则渲染为小窗状态
		return (
			<VideoCallAlert>
				<Avatar src={face1}/>
				<Paragraph>正在跟 XXX 进行通话</Paragraph>
				<Paragraph type='secondary'>点击切换为全屏模式</Paragraph>
				<FontAwesomeIcon icon={faVideo}/>
			</VideoCallAlert>
		)
	}

	return (
		// 👇把其他所有 ...rest 属性交给 StyledVideoCall 
		<StyledVideoCall src={videoCaller} {...rest}> 
			<Minimize shape='square'>
				<FontAwesomeIcon icon={faCompressAlt}/>
			</Minimize>
			<ActionGroup>
				<Action>
					<FontAwesomeIcon icon={faMicrophone}/>
				</Action>
				<Action type='hangOff'>
					<FontAwesomeIcon icon={faPhoneSlash}/>
				</Action>
				<Action>
					<FontAwesomeIcon icon={faVolumeMute}/>
				</Action>
			</ActionGroup>
			<Self src={face1} width='140px'/>
		</StyledVideoCall>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
VideoCall.propTypes = {
	children: PropTypes.any
};



export default VideoCall

