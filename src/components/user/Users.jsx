import { Flex, Spin, Avatar, Space } from 'antd';

const boxStyle = {
	margin: "5px 5px",
	padding: "5px 5px",
	width: '85%',
	height: '65%',
	borderRadius: 6,
	border: '1px solid #40a9ff',
};


export default function UsersPage({
	setUsersCurrentPageHandler,
	users,
	pageSize,
	totalUsersCount,
	currentPage,
	isFetching
}) {

	return (
		<div>
			<Flex justify="center" align="center" vertical>
				<h1>Users</h1>
				<div>
					{[...Array(Math.ceil(totalUsersCount/pageSize)).keys()].map(page => {
						return <span 
							onClick={() => setUsersCurrentPageHandler(page + 1)}
							style={{fontWeight: page + 1 === currentPage ? "bold" : "normal"}} 
							key={page}>
								{page + 1}
						</span>
					})}
				</div>
				
			</Flex>
			<Flex justify="center" align="center" vertical>
				{isFetching ? (
					<div>
						{
							users.map(user => 
								<Flex key={user.id} style={boxStyle} justify="center" align="center">											
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
					<Flex style={{marginTop: 100}} justify='center' wrap gap="small">
						<Spin size="large" />
					</Flex>
				)}				
			</Flex>
		</div>
	);
}