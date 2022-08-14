import React from 'react'
import PropTypes from 'prop-types'
import StyledFilterList from './style'
import Input from 'components/Input'
import Filter from 'components/Filter'
import Select from 'components/Select'
import Option from 'components/Option'
import Button from 'components/Button'
import Icon from 'components/Icon'
import { ReactComponent as Plus } from 'assets/icons/plus.svg'


//🌟抽离顶部的过滤组件, 本质就是通过属性去控制视图渲染
function FilterList({
	options, 			//是否显示过滤选项
	filterLabel = '列表组件', //过滤选项的值
	actionLabel,    //动作按钮，如果有才显示
	children,
	...rest}) {
	return (
		// 👇把其他所有 ...rest 属性交给 StyledFilterList 
		<StyledFilterList {...rest}> 
			<Input.Search/>
			<Filter style={{padding:'20px 0'}}>

				{/* 👇👇👇判断有传入 Filter 才显示过滤选项 */}
				{options && (
					<Filter.FilterItems label={filterLabel}>
						<Select>	
							{/* 👇👇👇遍历传入的 options ！!然后一项项放入 <Option/> 组件中 ⚡️⚡️⚡️ */}
							{options.map((optionValues,index) => (
								<Option key={index}> {optionValues} </Option>
							) )}
						</Select>
				</Filter.FilterItems>
				)}

				{actionLabel && (
					<Filter.Action label={actionLabel}>
						<Button shape='circle'>
							<Icon icon={Plus} width={14} height={14}/>
						</Button>
					</Filter.Action>
				)}
			</Filter>
			{/* 👇具体的内容列表！ */}
			{children}
		</StyledFilterList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
FilterList.propTypes = {
	options:PropTypes.array,
	filterLabel:PropTypes.string,
	actionLabel:PropTypes.string,
	children: PropTypes.any
};



export default FilterList

