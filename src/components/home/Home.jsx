import { Button } from "antd";

export default function HomePage({
	navigate,
	user
}) {
	
	console.log(user);
	return (
		<>
			
			<h1>HOME</h1>
			<Button onClick={()=>navigate(`/login`)}>Login</Button>
		</>
	)
}