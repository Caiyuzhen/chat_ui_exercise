import face1 from 'assets/images/face-male-1.jpg'
import face2 from 'assets/images/face-male-2.jpg'
import face3 from 'assets/images/face-male-3.jpg'
import face4 from 'assets/images/face-male-4.jpg'
import face5 from 'assets/images/face-female-1.jpg'
import face6 from 'assets/images/face-female-2.jpg'
import face7 from 'assets/images/face-female-3.jpg'
import face8 from 'assets/images/face-female-4.jpg'
import face9 from 'assets/images/face-female-5.jpg'



const messageListData = [
	{
	  id: 1,
	  avatarSrc: face1,
	  name: "Jimmy",
	  status: "online",
	  statusText: "在线",
	  time: "3 hours ago",
	  message: "Four short words sum up what has lifted most successful individuals above the crowd: a little bit more.",
	  unreadCount: 2,
	  replied: false,
	},
	{
	  id: 2,
	  avatarSrc: face2,
	  name: "Carmen",
	  status: "offline",
	  statusText: "离线",
	  time: "14:45 afternoon",
	  message: "One of the most important things to do is to do it well.",
	  unreadCount: 2,
	  replied: false,
	},
	{
	  id: 3,
	  avatarSrc: face3,
	  name: "Jenny",
	  status: "offline",
	  statusText: "离线",
	  time: "06:18 morning",
	  message: "How can you ever be so sure of yourself?",
	  unreadCount: 0,
	  replied: true,
	},
	{
	  id: 4,
	  avatarSrc: face7,
	  name: "Karen",
	  status: "online",
	  statusText: "在线",
	  time: "2022-12-10",
	  message: "The most important thing is to enjoy your life - to be happy - it's all that matters.",
	  unreadCount: 0,
	  replied: true,
	},
	{
	  id: 5,
	  avatarSrc: face8,
	  name: "Hannah",
	  status: "online",
	  statusText: "在线",
	  time: "2022-12-09",
	  message: "Don't be afraid to give up the good to go for the great.",
	  unreadCount: 0,
	  replied: false,
	},
	{
	  id: 6,
	  avatarSrc: face9,
	  name: "Alice",
	  status: "offline",
	  statusText: "离线",
	  time: "2022-12-01",
	  message: "It's not the years in your life that count. It's the life in your years.",
	  unreadCount: 0,
	  replied: true,
	},
  ];



  export default messageListData;