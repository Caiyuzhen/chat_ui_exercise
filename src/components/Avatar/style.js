import styled, { css } from 'styled-components'
import theme from '../../theme'



//使用 css 函数来创建需要复用的样式
const circleMixinFunc = (color) => css`
	content: "";
	position: absolute;
	display: block;
	width: 8px;
	height: 8px;
	/* 🔥🔥🔥可以访问 theme！ */
	background-color: ${color};//类比解构赋值出 theme
	border-radius: 50%;
`;




// 头像容器
const StyleAvatar = styled.div`
  position: relative;
`


//头像状态
const StatusIcon = styled.div`
  position: absolute;
  left:2px;
  top:4px;

  //⚡️用伪元素添加内容(内容前面，内容后面, & 表示外层父 div ，也可以省略【类比图层的概念】)
  &::before{
	${( {theme} ) => circleMixinFunc("white")};
	/* 用放大来让两个元素居中，而不是直接设置宽高 */
	transform: scale(2);
  }
  &::after{
	${( {theme} ) => circleMixinFunc(theme.green)}
  }
`

// 另一种获取颜色的写法：background-color: ${( {theme} ) => theme.green  };//类比解构赋值出 theme




//头像蒙板
const AvatarClip = styled.div`
	width:48px;
	height:48px;
	border-radius: 50%;
	overflow: hidden;
`


//头像图片(让头像适应蒙版的宽高)
const AvatarImage = styled.img`
	width:100%;
	height:100%;
	object-fit: cover;//自动填满整个蒙版
	object-position: center;//居中
`





export { StyleAvatar, StatusIcon, AvatarClip, AvatarImage }