import React from 'react'
import PropTypes from 'prop-types'
import StyledBadge,{Count} from './style'



function Badge({
		children, //子组件
		show=false, //是否显示徽章 Badge
		count=0, //未度数
		showZero=false, //未度数为 0 时是否显示徽章 Badge
		...rest
	}) {
	return (
		// 👇把其他所有 ...rest 属性交给 StyleBadge 
		<StyledBadge 
			variant={children ? "dot" : "default"}//用于判断如果有子内容（数量），则显示为【数量+小红点】，如果没有子内容（数量），则显示为【小红点】
			show={show}
			count={count} 
			showZero={showZero} 
			{...rest}
			> 

			{/* 👇短路运算，有子内容（数量）时，则显示为【数量+小红点】，如果没有子内容（数量），则显示为【小红点】 */}
			{children || <Count>{count}</Count>}
		</StyledBadge>
	);
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
Badge.propTypes = {
	show: PropTypes.bool,
	count: PropTypes.number,
	showZero: PropTypes.bool,
	children: PropTypes.any,
};



export default Badge

