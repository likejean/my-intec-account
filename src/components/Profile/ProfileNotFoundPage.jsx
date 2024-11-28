import { Link } from "react-router-dom";

export default function ProfileNotFoundPage() {
	return (
		<div>
			<h1>Error 404: PROFILE Not Found</h1>
			<Link to="/profiles">Profiles</Link>
		</div>
		
	)
}