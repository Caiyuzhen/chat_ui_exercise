import React from 'react'
import PropTypes from 'prop-types'
import StyledContactList, { Contacts } from './style'
import FilterList from 'components/FilterList'
import ContactCard from 'components/ContactCard'
import useStaggeredList from 'hooks/useStaggeredList'
import { animated  } from 'react-spring'
import contactsData from 'data/contactListData'


function ContactList({children,...rest}) {

	//调用自定义的 hooks 方法来添加列表出现的动画, 自定义数量
	const trailAnimes = useStaggeredList(10)

	return (
		// 👇把其他所有 ...rest 属性交给 StyledContactList 
		<StyledContactList {...rest}> 
			<FilterList filterLabel='排序方式' options={['按最新添加','按姓名排序']} actionLabel='Add'>
				{/* 👇 mock 的数据 */}
				<Contacts>
					{contactsData.map((contactsData,index) => (
						<animated.div key={contactsData.id} style={trailAnimes[index]}>
							{/* 🔥🔥把遍历出来的 contact 数据往下传递！！ */}
							<ContactCard key={contactsData.id} contact={contactsData}/>
						</animated.div>
					))}
				</Contacts>
				{/* 👇写死的数据 */}
				{/* <Contacts>
					{new Array(10).fill(0).map((_,index) => (
						<animated.div key={index} style={trailAnimes[index]}>
							<ContactCard key={index}/>
						</animated.div>
					))}
				</Contacts> */}
			</FilterList>
		</StyledContactList>
	)
}



/*	🔥🔥用来检查 props 参数是否符合要求(定义属性规范)*/
ContactList.propTypes = {
	children: PropTypes.any
};



export default ContactList

