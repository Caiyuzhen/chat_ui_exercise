//抽象出堆叠动画的 hooks

import { useTrail, animated  } from 'react-spring'

// 可以自定义数量
export default function useStaggeredList(number) {

	const trailAnimes = useTrail(number,{//6为数量长度
		transform: 'translate3d(0px, 0px, 0px)',//对哪个属性进行设置，3d 能开启 GDU 加速，性能好
		from: {transform:'translate3d(-50px, 0px, 0px)'},
		config: {
			mass: 0.9,//质量（越大，运动越慢）
			tension: 260,//张力（劲，劲越大，回弹越快）
			friction: 18,//摩擦力（阻力越小，反复越多）
		},
		delay:100, //每隔 200ms 执行一次
	})

	return trailAnimes
}