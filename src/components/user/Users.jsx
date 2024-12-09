import axios from "axios";
import { Flex, Spin, Avatar, Badge } from 'antd';
import { useEffect } from 'react';

const boxStyle = {
	margin: "5px 5px",
	padding: "5px 5px",
	width: '85%',
	height: '65%',
	borderRadius: 6,
	border: '1px solid #40a9ff',
};

const base64Flag = 'data:image/jpeg;base64,';
	
const arrayBufferToBase64 = buffer => {
	var binary = '';
	var bytes = [].slice.call(new Uint8Array(buffer));
	bytes.forEach((b) => binary += String.fromCharCode(b));
	return window.btoa(binary);
};


export default function UsersPage({
	setUsersHandler, 
	setUsersCurrentPageHandler,
	users,
	pageSize,
	totalUsersCount,
	currentPage
}) {

	useEffect(() => {
		const itKamasutraUsers = async() => {
			const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`);
			console.log(response.data.items)
			const data = await response.data.items;
			if (setUsersHandler) setUsersHandler(data);	
		}

		itKamasutraUsers();
	},[setUsersHandler, currentPage, pageSize]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		// Fetch data here
	// 		const response = await axios.get("https://express-srv.onrender.com/api/users");
	// 		const data = await response.data.payload;
	// 		if (setUsersHandler) setUsersHandler(data);			
	// 	};

	// 	fetchData();
	// }, [setUsersHandler]); // The empty dependency array ensures the effect runs only once on mount
	
	return (
		<div>
			<Flex justify="center" align="center" vertical>
				<h1>Users</h1>
				<div>
					{[...Array(Math.ceil(totalUsersCount/pageSize)).keys()].map(page => {
						return <span 
							onClick={() => setUsersCurrentPageHandler(page + 1)}
							style={{fontWeight: page + 1 === currentPage ? "bold" : "normal"}} 
							key={page + 1}>{page + 1}</span>
					})}
				</div>
				
			</Flex>
			<Flex justify="center" align="center" vertical>
				{users.length > 0 ? (
					<div>
						{
							users.map(user => 
								<Flex key={user._id} style={boxStyle} justify="center" align="center">											
									<Avatar src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" shape="square" size={85} />
									<div>Username: <h4>{user.name}</h4></div>
								</Flex>
							)
						}
						{/* {
							users.map(user => 
								<Flex key={user._id} style={boxStyle} justify="center" align="center">											
									<Avatar src= {base64Flag + arrayBufferToBase64(user.avatarImageData.data)} shape="square" size={85} />
									<div><h4>Username: {user.username}</h4></div>
									<div><p>Fullname: {user.firstname} {user.lastname}</p></div>
								</Flex>
							)
						} */}
					</div>
				) : (
					<Spin size="large" />
				)}				
			</Flex>
		</div>
	);
}