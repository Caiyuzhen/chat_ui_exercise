import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contacts } from './style'
import FilterList from 'components/FilterList'
import ContactCard from 'components/ContactCard'



function ContactList({children,...rest}) {

	return (
		// 👇把其他所有 ...rest 属性交给 StyledContactList 
		<StyledContactList {...rest}> 
			<FilterList filterLabel='排序方式' options={['按最新添加','按姓名排序']} actionLabel='Add'>
				<Contacts>
					{new Array(10).fill(0).map((_,index) => (
						<ContactCard key={index}/>
					))}
				</Contacts>
			</FilterList>
		</StyledContactList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
ContactList.propTypes = {
	children: PropTypes.any
};



export default ContactList

