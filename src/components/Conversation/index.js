import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import StyleConversation, { ConversationContainer, MyChatBubble, ChatArea, Drawer } from './style'
import TitleBar from 'components/TitleBar'
import ChatBubble from 'components/ChatBubble'
import Footer from 'components/Footer'
import VoiceMessage from 'components/VoiceMessage'
import Profile from 'components/Profile'
import VideoCall from 'components/VideoCall'
import { useSpring } from 'react-spring'



function Conversation({children,...rest}) {


	//点击展开侧边栏的事件(🔥🔥记得要一层层传递到 TitleBar 的 Avatar 的 Onclick 事件中去！！)
	const [showDrawer, setShowDrawer] = useState(false) 

	//点击展开视频通话组件的事件
	const [showVideoCalling, setVideoCalling] = useState(false)


	//顶部栏组件的展开动画, 传递给 TitleBar 组件
	//✈️第一步：导入 useSpring 包
	const tBarAnimeProps = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0px,0px)',
		from: { opacity: 0, transform: 'translate3d(0px,-50px,0px)' },
		delay: 300,
	})



	//视频通话组件的展开动画, 传递给 conversation 组件
	const conAnimeProps = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0px,0px)',
		from: { opacity: 0, transform: 'translate3d(35px,0px,0px)' },
		delay:600,
	})


	//底部输入框的动画
	const inputbarAnimeProps = useSpring({
		opacity: 1,
		transform: 'translate3d(0px,0px,0px)',
		from: { opacity: 0, transform: 'translate3d(0px,20px,0px)' },
		delay: 800,
	})




	if(!showVideoCalling){//取反为 true 时候显示 Chat 视图
		return (
			//🔥🔥👇给 ChatArea 传递属性!!!别忘了！
			<StyleConversation showDrawer={showDrawer} showVideoCalling={showVideoCalling} {...rest}> 
				<ChatArea>
					{/* 点击后展开右侧边栏的事件,点击后取反！ */}
					<TitleBar 
						name={'Amy'}
						avatarStatus={'online'}
						//🔥🔥给 Titlebar 传递属性, 然后记得进入 TitleBar 去定义这个两个 onClick事件！！
						//👇可以理解为从 TitleBar 内取出了 onAvatarClick 事件的回调参数
						onAvatarClick={()=> setShowDrawer(!showDrawer)}
						onVideoClick={()=> setVideoCalling(!showVideoCalling)}
						//✈️第二步: 添加动画属性(因为是组件，而不是样式组件！), 记得还要进入 TitleBar 去接收 tBarAnimeProps 属性！
						animeProps={tBarAnimeProps}
						/>
						{/* 下面因为是样式组件，所以可以直接 style 添加动画化样式！ */}
					<ConversationContainer style={conAnimeProps}>
						<ChatBubble time='Yesterday 14:00'>Hi,Jimmy!</ChatBubble>
						<MyChatBubble time='Today 10:30' type='mine'>One's courtesy is a mirror to see his image 😄.</MyChatBubble>
						<ChatBubble time='Today 10:35'>Happy Firday 🎉!</ChatBubble>
						<ChatBubble time='Today 10:38'>Where are you going to play on the weekend?</ChatBubble>
						<MyChatBubble time='Today11:00'type='mine'>
							<VoiceMessage type='mine' time='Today11:00'/>
						</MyChatBubble>
					</ConversationContainer>
					<Footer animeProps={inputbarAnimeProps}/>
				</ChatArea>
	
				{/* 右侧边栏, 给关闭 icon 传递关闭的参数！ */}
				<Drawer showDrawer={showDrawer}>
					<Profile onCloseClick={()=> setShowDrawer(!showDrawer)} />
				</Drawer>
			</StyleConversation>
		)
	}

	if(showVideoCalling){
		return(
			// 🔥🔥给 VideoCall 传递一个属性, 让点击挂断电话时候能够关闭页面
			<VideoCall onHangOffClicked={()=>setVideoCalling(false)}/>
		)
	}


}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Conversation.propTypes = {
	children: PropTypes.any
};



export default Conversation

