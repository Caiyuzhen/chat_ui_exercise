import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockedList, { BlockedAvatar, BlockedName, ClosableAvatar, CloseIcon, FriendList, SettingsMenu } from './style'
import Icon from 'components/Icon'
import {ReactComponent as ArrowMenuLeft} from 'assets/icons/arrowMenuLeft.svg'
import 'styled-components/macro'
import Text from 'components/Text'
import face from 'assets/images/face-female-2.jpg'
import {ReactComponent as closeCircle} from 'assets/icons/closeCircle.svg'





function BlockedList({children,...rest}) {
	return (
		<StyledBlockedList {...rest}> 

			{/* 标题 */}
			<SettingsMenu>
				<Icon icon={ArrowMenuLeft} css={`cursor:pointer;`}/>
				<Text size='xlarge'> 已屏蔽的好友列表</Text>
			</SettingsMenu>

			{/* 整个屏蔽列表 */}
			<FriendList>
				{/* 🔥🔥🔥🔥🔥使用数组生成多个列表🔥🔥🔥🔥🔥 */} 
				{new Array(8).fill(0).map((_,index)=>{//生成 8 个，从 0 开始索引 !!
					return(
						//单个屏蔽头像的样式组件
						<ClosableAvatar key={index}>
							<BlockedAvatar size='104px' src={face}/>
							<BlockedName>Alan</BlockedName>
							<CloseIcon width={46} height={46} icon={closeCircle}/>
					</ClosableAvatar>
					)
				})}
			</FriendList>

		</StyledBlockedList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
BlockedList.propTypes = {
	children: PropTypes.any
};



export default BlockedList

