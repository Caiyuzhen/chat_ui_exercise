import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style'
import NoteCard from 'components/NoteCard'
import FilterList from 'components/FilterList'



function NoteList({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledNoteList 
		<StyledNoteList {...rest}> 
			<FilterList filterLabel='排序方式' options={['按最新笔记','按最后编辑']} actionLabel='添加笔记'>
				<Notes>
					{new Array(10).fill(0).map((_,index)=>(
						<NoteCard/>
					))}
				</Notes>
			</FilterList>
		</StyledNoteList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
NoteList.propTypes = {
	children: PropTypes.any
};



export default NoteList

