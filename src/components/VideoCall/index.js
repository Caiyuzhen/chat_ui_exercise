import React from 'react'
import PropTypes from 'prop-types'
import StyledVideoCall, { Action, ActionGroup, Minimize, Self } from './style'
import {faCompressAlt,faMicrophone,faPhoneSlash,faVolumeMute,faVideo,} from "@fortawesome/free-solid-svg-icons";
import videoCaller from 'assets/images/videoCaller.jpg'
import face1 from 'assets/images/face-male-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function VideoCall({children,...rest}) {

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

