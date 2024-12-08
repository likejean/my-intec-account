import axios from "axios";
import { Flex, Spin, Avatar } from 'antd';
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


export default function UsersPage({setUsersHandler, users}) {

	useEffect(() => {
		const fetchData = async () => {
			// Fetch data here
			const response = await axios.get("https://express-srv.onrender.com/api/users");
			const data = await response.data.payload;
			if (setUsersHandler) setUsersHandler(data);			
		};

		fetchData();
	}, [setUsersHandler]); // The empty dependency array ensures the effect runs only once on mount

	
	return (
		<div>
			<div><h1>Users</h1></div>
			<Flex justify="center" align="center">
				{users.length > 0 ? (
					<div>
						{
							users.map(user => 
								<Flex key={user._id} style={boxStyle} justify="center" align="center">											
									<Avatar src= {base64Flag + arrayBufferToBase64(user.avatarImageData.data)} shape="square" size={85} />
									<div><h4>Username: {user.username}</h4></div>
									<div><p>Fullname: {user.firstname} {user.lastname}</p></div>
								</Flex>
							)
						}
					</div>
				) : (
					<Spin size="large" />
				)}				
			</Flex>
		</div>
	);
}