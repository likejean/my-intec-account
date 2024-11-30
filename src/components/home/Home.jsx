import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../redux/store";

export default function HomePage(props) {
	const [users, setUsers] = useState([]);
	useEffect(() => {
			fetchAllUsers()
			.then(data => setUsers(data.payload));
		},[]);
	
	console.log(users, props)
	return (
		<h1>HOME</h1>
	)
}