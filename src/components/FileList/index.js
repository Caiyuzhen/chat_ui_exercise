import React from 'react'
import PropTypes from 'prop-types'
import StyledFileList, { Files } from './style'
import FilterList from 'components/FilterList'
import FileCard from 'components/FileCard'
import useStaggeredList from 'hooks/useStaggeredList'
import { animated  } from 'react-spring'
import fileData from 'data/fileListData'


function FileList({children,...rest}) {


	const trailAnimes = useStaggeredList(10)

	return (
		<StyledFileList {...rest}> 
			<FilterList filterLabel='排序方式' options={['按最新文件','按文件名倒序']}>
				<Files>
					{fileData.map((fileData,index) =>(
						<animated.div key={fileData.id} style={trailAnimes[index]}>
							{/* 🔥🔥把遍历出来的 fileData 数据往下传递！！ */}
							<FileCard key={fileData.id} fileData={fileData}/>
						</animated.div>
					))}
				</Files>
				{/* 
				<Files>
					{new Array(10).fill(0).map((_,index) =>(
						<animated.div key={index} style={trailAnimes[index]}>
							<FileCard key={index}/>
						</animated.div>
					))}
				</Files> 
				*/}
			</FilterList>
		</StyledFileList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
FileList.propTypes = {
	children: PropTypes.any
};



export default FileList

