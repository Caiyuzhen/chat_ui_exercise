import React from 'react'
import PropTypes from 'prop-types'
import StyledFileCard, { FileIcon, FileName, FileSize, Options, Time } from './style'
import { ReactComponent as FileExcel} from 'assets/icons/fileExcel.svg'
import { ReactComponent as FileImage} from 'assets/icons/fileImage.svg'
import { ReactComponent as FilePdf} from 'assets/icons/filePdf.svg'
import { ReactComponent as FilePpt} from 'assets/icons/filePpt.svg'
import { ReactComponent as FileWord} from 'assets/icons/fileWord.svg'
import { ReactComponent as FileZip} from 'assets/icons/fileZip.svg'
import { ReactComponent as OptionIcon} from 'assets/icons/options.svg'
import Icon from 'components/Icon'


//🔥🔥🔥🔥用一个对象保存这些 file icon ！！
//这样可以根据不同的属性去加载不同的图标，更便于统一管理
//注意，这里需要跟 Mock 的 Data 格式一致！！
const fileIcons = {
	excel: FileExcel,
	image: FileImage,
	pdf: FilePdf,
	ppt: FilePpt,
	word: FileWord,
	zip: FileZip,
}

function FileCard({
	fileData,//最后传入的文件数据！
	icon,  //文件类型
	children,
	...rest}) 
	{
	return (
		// 👇把其他所有 ...rest 属性交给 StyledFileCard 
		<StyledFileCard {...rest}> 
			<FileIcon icon={fileIcons[fileData.type]}/>
			<FileName> {fileData.name} </FileName>
			<FileSize> {fileData.size} </FileSize>
			<Options> <Icon icon={OptionIcon} width={20}/></Options>
			<Time> {fileData.updateAt} </Time>

			{/* <FileIcon icon={fileIcons.zip}/>
			<FileName>Design Document files</FileName>
			<FileSize> 2.6Mb </FileSize>
			<Options> <Icon icon={OptionIcon} width={20}/></Options>
			<Time> 2022-08-08 </Time> */}
		</StyledFileCard>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
FileCard.propTypes = {
	children: PropTypes.any
};



export default FileCard

