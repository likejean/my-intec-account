import axios from "axios";
import { Flex, Spin } from 'antd';
import { useEffect } from 'react';

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
			<h1>Users</h1>
			{users.length > 0 ? (
				<div>					
					{	
						users.map(user => 
							<div key={user._id}>
								<h4>Username: {user.username}</h4>								
								<img src={base64Flag + arrayBufferToBase64(user.avatarImageData.data)} alt="not found"></img>
								<p>Fullname: {user.firstname} {user.lastname}</p>
							</div>
						)
					}
				</div>
			) : (
				<Flex align="center" gap="middle">				
					<Spin size="large" />
				</Flex>
			)}
		
		</div>
	);
	
}