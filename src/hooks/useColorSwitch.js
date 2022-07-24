//抽象出修改颜色的 hooks
import {useState} from 'react';




function useColorSwitch(color1="#ff0000", color2="#514BFA"){ //定义默认颜色(color 1 为初始颜色，color 2 为默认要改变的颜色 )
	// const [color,setColor] = useState('#ff0000');	//写死的方式
	// const [color2,setColor2] = useState('#ff0000');	//写死的方式

	const [color, setColor] = useState(color1)//自定义参数的方式



	const handleButtonClick = (e) => {
		// console.log(e.target);
		setColor(color2);//设置为新的颜色
	}

	//返回【颜色】以及【点击事件】给其他组件使用
	return [color,handleButtonClick]

}

export default useColorSwitch;
