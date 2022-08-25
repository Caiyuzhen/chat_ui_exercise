import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteCard, { NoteExcerpt, NoteImage, NotePublishTime, NoteTitle } from './style'
import photo2 from 'assets/images/photo2.jpg'



function NoteCard({notesData, children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledNoteCard 
		<StyledNoteCard {...rest}> 
			{children}
			<NoteTitle> {notesData.title} </NoteTitle>
			<NoteImage src={notesData.image}/>
			<NoteExcerpt> {notesData.excerpt} </NoteExcerpt>
			<NotePublishTime> {notesData.publishedAt} </NotePublishTime>
		</StyledNoteCard>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
NoteCard.propTypes = {
	children: PropTypes.any
};



export default NoteCard

