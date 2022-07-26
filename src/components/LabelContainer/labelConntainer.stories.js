import Input from "components/Input"
import React from "react";
import LabelContainer from ".";




export default {
	title: "排版/LabelContainer",
	component: LabelContainer,
};



export const InputBarWithLabel = () => (
	<LabelContainer label='Title'>
		<input 
			type="text" 
			// 加圆角加背景色
			style={{
				padding:'6px 10px',
				// outlineStyle:'none',
				border: 'none',
				borderRadius: '6px',
				backgroundColor: '#F2F2F2',
				// border: '1px solid #E2E5E9',
			}}
			placeholder='Input something...'
			/>
	</LabelContainer>
)
