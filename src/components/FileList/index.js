import React from 'react'
import PropTypes from 'prop-types'
import StyledFileList, { Files } from './style'
import FilterList from 'components/FilterList'
import FileCard from 'components/FileCard'



function FileList({children,...rest}) {

	return (
		<StyledFileList {...rest}> 
			<FilterList filterLabel='排序方式' options={['按最新文件','按文件名倒序']}>
				<Files>
					{new Array(10).fill(0).map((_,index) =>(
						<FileCard key={index}/>
					))}
				</Files>
			</FilterList>
		</StyledFileList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
FileList.propTypes = {
	children: PropTypes.any
};



export default FileList

