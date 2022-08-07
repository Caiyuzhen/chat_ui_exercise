import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StylePopover, { Content, Target, Triangle } from './style'





function Popover({
	content,   //Popover 内的内容，可以是文本、其他组件
	offset,    //指向的偏移位置
	children,
	onVisible, //额外的属性，当 Popover 显示时触发，可以做进一步的动作
	onHide,		//额外的属性，当 Popover 显示时触发，可以做进一步的动作
	...rest}
	) {


	//显示与隐藏 popover 的 hook 方法
	const [visible, setVisible] = useState(false) //默认隐藏 popover


	//点击事件，显示 popover
	const handleClick = () => {
		if(visible === true){
			setVisible(false)
			onHide && onHide() //进一步的方法（可选）, 表示如果有 onHide 属性，就会变为 true，就会执行 onHide() 方法
			// console.log(visible)
			// 比如在 footer 跟 useState() 来配合，当 icon 点击后去更改 icon 的颜色：onVisible={() => setEmojiIconActive(true)} 

		} else {
			setVisible(true)
			onVisible && onVisible() //进一步的方法（可选）, 表示如果有 onVisible 属性，就会变为 true，就会执行 onVisible() 方法
		}
	}


	return (
		// 👇把其他所有 ...rest 属性交给 StylePopover 
		<StylePopover {...rest} onClick={handleClick}> 
			{/* Popover 的内容，可以是文本、其他组件比如图片等 */}
			<Content offset={offset} visible={visible}>
				{content}
			</Content>
			<Triangle offset={offset} visible={visible}/>
			<Target>{children}</Target>
		</StylePopover>
	)
}




/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Popover.propTypes = {
	children: PropTypes.any,
	content: PropTypes.any,
	offset: PropTypes.shape( {x: PropTypes.string, y: PropTypes.string}),
	onVisible: PropTypes.func,
	onHide: PropTypes.func,
};



export default Popover

