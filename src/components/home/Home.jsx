import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../store/state";

export default function HomePage() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
			fetchAllUsers()
			.then(data => setUsers(data.payload));
		},[]);
	
	console.log(users)
	return (
		<h1>HOME</h1>
	)
}