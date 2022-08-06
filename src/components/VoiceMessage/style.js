import StyledButton from "components/Button/style"
import StyledIcon from "components/Icon/style"
import StyledText from "components/Text/style"
import styled,{css} from "styled-components"


//🚀注意！此组件要放到 bubble 组件内进行渲染！！不单独写底色了！


const StyledVoiceMessage = styled.div`
	display: flex;
	align-items: center;
	z-index:15;
	//👇👇播放按钮：让播放按钮不要随着窗口的拉伸而变化！！
	//& 表示外层父 div ，也可以省略【类比图层的概念】
	& > *:first-child {
		flex-shrink:0;//不拉伸
	}
	& > *:not(:first-child){//排除掉第一个播放按钮后，剩下的元素统一往右边移动
		margin-left:16px;
	}
	//使用变体来判断样式！
	${({type})=>type && voiceVariants[type]}
`;




const voiceVariants = {
	mine: css`
		//更改播放按钮的样式！可以通过 StyledVoiceMessage 访问到！！
		${StyledButton}{
			background-color:white;
			
			//Button 内的 Icon 返白！
			${StyledIcon} path {
				fill: ${({theme})=>theme.primaryColor};
			}
		}
		//& 表示外层父 div ，也可以省略【类比图层的概念】
		//🔥🔥🔥👇要先选择外层是因为为了避免直接选到了 Button 的 Icon，所以用父来选择 Icon 子元素！
		& > ${StyledIcon} path {
				fill:white;
		}
		& > ${StyledText} {
				color:white;
		}
	`,
}







export default StyledVoiceMessage;