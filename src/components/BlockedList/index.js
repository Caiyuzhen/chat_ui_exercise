import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockedList, { BlockedAvatar, BlockedName, ClosableAvatar, CloseIcon, FriendList, SettingsMenu } from './style'
import Icon from 'components/Icon'
import {ReactComponent as ArrowMenuLeft} from 'assets/icons/arrowMenuLeft.svg'
import 'styled-components/macro'
import Text from 'components/Text'
import face from 'assets/images/face-female-2.jpg'
import {ReactComponent as closeCircle} from 'assets/icons/closeCircle.svg'
import { useNavigate, Outlet } from "react-router-dom";
import blockedData from 'data/blockedData'
import { useTrail, animated } from 'react-spring'




function BlockedList({children,...rest}) {

	//⚡️⚡️点击后返回上一层设置页的路由
	const navigate = useNavigate()


	const trailAnimes = useTrail(blockedData.length,{//6为数数组的长度 -> messageListData.length
		transform: 
			'translate3d(0px, 0px, 0px)',//🔥变成什么样
			'opacity': 1, //渐现
			'scale': 1, //缩放
		from: {//🔥从什么样开始
			transform:'translate3d(0px, 38px, 0px)',
			opacity: 0.1,
			scale:0.9,
			
		},
		config: {
			mass: 0.9,//质量（越大，运动越慢）
			tension: 260,//张力（劲，劲越大，回弹越快）
			friction: 18,//摩擦力（阻力越小，反复越多）
		},
		// delay:100, //每隔 100ms 执行一次
	})


	return (
		<StyledBlockedList {...rest}> 
			{/* 标题 */}
			<SettingsMenu>
				{/* 返回icon */}
				<Icon 
					icon={ArrowMenuLeft} 
					css={`cursor:pointer;`} 
					width={20}
					height={20}
					//⚡️⚡️ 点击后返回设置页的路由
					// onClick={()=> navigate('/settings')}//方法一：直接跳转路径
					onClick={()=> navigate(-1)}//方法二：-1，向上走一层
					/>
				<Text size='large' bold> List of blocked friends </Text>
			</SettingsMenu>


			{/* 整个屏蔽列表 */}
			<FriendList>
				{/* 🔥🔥🔥🔥🔥加上动画的效果🔥🔥🔥🔥🔥 */} 
					{blockedData.map((blockedData, index)=>{//生成 8 个，从 0 开始索引 !!
						return(//map(()=>{}) 写成对象, 就要 return， 如果写成map(()=>()), 就不需要 return
							//🍉🍉🍉给每个屏蔽头像的样式组件加上动画！！！trailAnimes【index】
							<animated.div key={blockedData.id} style={trailAnimes[index]}>
								<ClosableAvatar key={blockedData.id}>
									<BlockedAvatar size='54px' src={blockedData.avatarSrc}/>
									<BlockedName> {blockedData.name} </BlockedName>
									<CloseIcon width={46} height={32}  icon={closeCircle}/>
								</ClosableAvatar>
							</animated.div>
						)
					})}
				{/* 🔥🔥🔥🔥🔥使用 mock 的数据🔥🔥🔥🔥🔥 */} 
					{/* {blockedData.map((blockedData, index)=>{//生成 8 个，从 0 开始索引 !!
						return(
							//单个屏蔽头像的样式组件
							<ClosableAvatar key={blockedData.id}>
								<BlockedAvatar size='54px' src={blockedData.avatarSrc}/>
								<BlockedName> {blockedData.name} </BlockedName>
								<CloseIcon width={46} height={32}  icon={closeCircle}/>
							</ClosableAvatar>
						)
					})} */}
				{/* 🔥🔥🔥🔥🔥使用数组生成多个列表🔥🔥🔥🔥🔥 */} 
					{/* {new Array(8).fill(0).map((_,index)=>{//生成 8 个，从 0 开始索引 !!
						return(
							//单个屏蔽头像的样式组件
							<ClosableAvatar key={index}>
								<BlockedAvatar size='54px' src={face}/>
								<BlockedName>Alan</BlockedName>
								<CloseIcon width={46} height={32}  icon={closeCircle}/>
							</ClosableAvatar>
						)
					})} */}
			</FriendList>
			<Outlet/>
		</StyledBlockedList>
	)
}






export default BlockedList

