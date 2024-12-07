
export default function UsersPage(props) {
	console.log(props);
	return (
		<div>
			<h1>Users</h1>
			{	
				props.users.map(user => 
					<div key={user.id}>
						<img src={user.avatar} alt="not found"></img>
						<p>{user.firstname} {user.lastname}</p>
						{user.username}
					</div>
				)
			}
		</div>		
	)
}