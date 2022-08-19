import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledDropdown, { Container, Items } from './style'
import Paragraph from "components/Paragraph"
import Sperator from 'components/Sperator'
import {ReactComponent as options} from 'assets/icons/options.svg'
import Icon from "components/Icon"
import { useTheme } from 'styled-components'



function Dropdown({
	children,  
	content,  //🔥🔥🔥接收 dropdown 的内容,如果有才出现 dropdown
	align='right', //出现的方向
	itemsArr, //如果
	...rest}) {


	const theme = useTheme()
	
	/*
	🔥🔥显示与隐藏 Dropdown 菜单的 hook
		1.useState, 设置 hook
		2.添加 onClick 事件
		3.给对应的 Style 元素绑定对应的变量
		4.在 Style 内进行判断，改变样式
	*/
	const [visible,SetVisible] = useState(false)

	//因为是鼠标移入移出的事件, 所以设置个定时器, 避免一下子就消失了

	
	return (
		<StyledDropdown {...rest}> 

			{/* ... 更多 icon  */}
			<Icon 
				color={theme.gray3} 
				opacity={0.8} 
				icon={options} 
				onMouseEnter={() => SetVisible(!visible)} 
				onMouseLeave={() => 
					setTimeout(()=>{SetVisible(!visible)},600)//🔥🔥🔥延迟 6 毫秒再让下拉菜单消失！！
				}/>

			{/* 具体的 Dropdown 面板, 有 content 则显示*/}
			{content && (
				<Container align={align} visible={visible}>
					{content.map((item,index) => (//遍历数组创建 dropdown 菜单
						index === 2 ? //🔥🔥判断是不是第 2 项，是的话变为警告色!
							''  :  <Items key={index}> <Paragraph> {item} </Paragraph></Items>
					))}
					<Sperator/>
					{content.map((item,index) => (//遍历数组创建 dropdown 菜单
						index === 2 ? //🔥🔥判断是不是第 2 项，是的话变为警告色!
							<Items key={index}>  <Paragraph bold type='danger'>  {item} </Paragraph> </Items>  :  ''
					))}
				</Container>
			)}
		</StyledDropdown>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Dropdown.propTypes = {
	children: PropTypes.any,
	content: PropTypes.any,
	align: PropTypes.oneOf(['top,','left','bottom','right']),
};



export default Dropdown

