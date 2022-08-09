import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export default {
	title: 'UI 组件/Icon',
	component: Icon
};

// export 的名字可以自定义
export const Default = () => 
	<Icon icon={SmileIcon}/>;

export const CustomColor = () => {
	return <Icon 		
	          icon={SmileIcon}
			  color="#cccccc"
			/>;
}

export const CustomSizeColors = () => {
	return <Icon 		
	          icon={SmileIcon}
			  color="#333333"
			  width={48}
			  height={48}
			/>;
}

export const FontAwesome = () => {
	return <FontAwesomeIcon 
		icon={faCommentDots} 
		style={{color:'#3370FF'}}
		/>
}

export const FontAwesomeSizes = () => {
	return( 
		<>
			<FontAwesomeIcon icon={faCommentDots} style={{color:'#3370FF'}} fontSize={24}/>
	     	<FontAwesomeIcon icon={faFolder} style={{color:'#3370FF'}} fontSize={48}/>
			 <FontAwesomeIcon icon={faCoffee} style={{color:'#3370FF'}} fontSize={64}/>
		</>
	)
}


export const SocialMedia = () => {
	return(
		<Icon.Social 
			icon={faTwitter}
			// color="#3370FF"	
			bgColor="3370FF"
			width={48}
			height={48}
			href='http://www.twitter.com'
		/>
	)
}
