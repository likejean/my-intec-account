import { Link } from "react-router-dom";

export default function HomeNotFoundPage() {
	return (
		<div>
			<h1>Error 404: HOME Not Found</h1>
			<Link to="/">Home</Link>
		</div>
		
	)
}