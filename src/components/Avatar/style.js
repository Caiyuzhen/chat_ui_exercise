import styled, { css } from 'styled-components'
import theme from '../../theme'



//🌟协同人状态, 这里使用 css 函数来创建需要复用的样式
const circleMixinFunc = (color, size="8px") => css`
	content: "";
	position: absolute;
	display: block;
	width: ${ size };
	height: ${ size };
	/* 🔥🔥🔥可以访问 theme！ */
	background-color: ${color};//类比解构赋值出 theme
	border-radius: 50%;
	/* 固定长宽比例 */
	aspect-ratio: 1/1;
`




// 头像容器
const StyleAvatar = styled.div`
  position: relative;
`


//头像状态
const StatusIcon = styled.div`
  position: absolute;
  left:2px;
  top:4px;

  /*⚡️用伪元素添加元素
  	前面有绿色圆点，内容后面有白色圆点
	& 表示外层父 div ，也可以省略【类比图层的概念】
  */
  &::before{
	${( { size } ) => circleMixinFunc("white",size)};
	/* 用放大来让两个元素居中，而不是直接设置宽高 */
	transform: scale(2);
  }
  
  &::after{ //因为我们把 status 跟 size 的状态属性传给了它
	${( {theme ,status, size} ) => {
			if(status === 'online'){
				return circleMixinFunc(theme.green, size)	//根据 index.js 返回的 props 可以判断是什么状态(在不在线，然后显示对应的协同头像颜色！！)
			} else if(status === 'offline'){
				return circleMixinFunc(theme.gray, size)
			}
		}
	}
  }
`

// 另一种获取颜色的写法：background-color: ${( {theme} ) => theme.green  };//类比解构赋值出 theme




//头像宽高蒙板
const AvatarClip = styled.div`
	width:${ ( {size} ) => size }; //传入的是在 index.js 中被解构出来的属性！！
	height:${ ( {size} ) => size };	//传入的是在 index.js 中被解构出来的属性！！
	border-radius: 50%;
	overflow: hidden;
`


//头像图片, 使用 img 标签！然后让头像适应蒙版的宽高
const AvatarImage = styled.img`
	width:100%;
	height:100%;
	object-fit: cover;//自动填满整个蒙版
	object-position: center;//居中
`




export default StyleAvatar;
export { StatusIcon, AvatarClip, AvatarImage };