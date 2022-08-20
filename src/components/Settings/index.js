import React from 'react'
import PropTypes from 'prop-types'
import StyledSettings,{SettingItemControl, StyledSettingItems, StyledSettingGroup} from './style'
import Switch from 'components/Switch'
import Paragraph from 'components/Paragraph'
import Icon from 'components/Icon'
import {ReactComponent as ArrowMenuRight} from 'assets/icons/arrowMenuRight.svg'
import Sperator from 'components/Sperator'
import 'styled-components/macro'//🔥🔥🔥很关键，能够使用 css`` 来更改组件样式
import Text from 'components/Text'
import { Link, Route, Routes } from 'react-router-dom'
import 'styled-components/macro'



//整体设置面板
function Settings({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledSettings 
		<StyledSettings {...rest}> 

			<SettingsGroup groupName='隐私设置'>
				<SettingItems type='switch' label='添加好友时需要验证'/>
				<SettingItems type='switch' label='推荐通讯录好友' description='上传的通讯录只用来匹配好友列表，本应用不会记录任何用户的通讯录数据'/>
				<SettingItems type='switch' label='只能通过手机号找到我'/>
			</SettingsGroup>

			<SettingsGroup groupName='通知设置'>
				<SettingItems type='switch' label='新消息通知' description='开启后新消息将会通过系统通知进行提醒'/>
				<SettingItems type='switch' label='语音和视频通话提醒' />
				<SettingItems type='switch' label='显示通知详情'/>
				<SettingItems type='menu' label='声音'/>
				{/* 包裹一层路由 */}
				<Link 
					to={`/setting/blocked`} 
					css={`text-decoration: none; color:inherit;`}
					>
					<SettingItems type='menu' label='查看已屏蔽的好友列表'/>	
				</Link>


			</SettingsGroup>

		</StyledSettings>
	)
}


//设置组的容器
function SettingsGroup({
	groupName,    //每组设置项的标题名
	children, //设置项的具体内容
	...rest}) {
	return(
		<StyledSettingGroup {...rest}>
			<Paragraph ellipsis size='large' bold > {groupName} </Paragraph>
			{/* children 是具体的设置项 */}
			{children}
		</StyledSettingGroup>
	)
}


//🔥具体的设置项 item，要 export，因为要在 stories 去写样式
export function SettingItems({
	label,   	//设置项的文本信息
	type,		//是否显示 switch 开关
	description,	//是否显示描述信息
	children, 
	...rest
}){
	return(
		<StyledSettingItems {...rest}>

			{/* 描述信息 + 右侧操作 Action */}
			<SettingItemControl>
				{/* 👇 另一种思路，不用 Variants ，直接用 if 来判断*/}
				<Paragraph ellipsis>{label}</Paragraph>
				{/* 👇短路判断！！不仅是为 true ！!switch 为是否有开关，menu 为是否有二级页面！！ */}
				{type === 'switch' && <Switch/>} 
				{type === 'menu' && <Icon icon={ArrowMenuRight}/>}
			</SettingItemControl>

			{/* 判断底部的描述信息，有传入则显示 */}
			{description && (
				//方式一： macro 的 css={`margin: 2px 4px 0px 0px`}
				//方式二：style={{ margin:'2px 4px 0px 0px'}}
				<Paragraph type='secondary' style={{ margin:'2px 4px 0px 0px'}}>
					{description}
				</Paragraph>
			)}

			<Sperator style={{ marginTop: '16px', marginBottom: '20px' }}/>

		</StyledSettingItems>
	)
}







/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Settings.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	children: PropTypes.any,
};



export default Settings

