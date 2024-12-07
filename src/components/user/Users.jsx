
export default function UsersPage(props) {

	if (props.users.length === 0) props.setUsersHandler([
		{
			id: 1,
			avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
			firstname: "Sergey",
			lastname: "Popach",
			level: "Admin",
			location: {
				city: "Seattle",
				country: "United States"
			},
			username: "likejean",
			age: 47,
			aboutYourself: "TBD"
		},
		{
			id: 2,
			avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
			firstname: "Olesia",
			lastname: "Popach",
			level: "User",
			location: {
				city: "Seattle",
				country: "United States"
			},
			username: "olesiapopach",
			age: 39,
			aboutYourself: "TBD"
		},
		{
			id: 3,
			avatar: "https://i.pinimg.com/564x/63/13/b6/6313b6d4f9dc17bd7ffc2a08c4bb3ffa.jpg",
			firstname: "Alex",
			lastname: "Popach",
			level: "User",
			location: {
				city: "Everett",
				country: "United States"
			},
			username: "electric",
			age: 35,
			aboutYourself: "TBD"
		},
	]);

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