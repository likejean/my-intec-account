import { useParams, Link } from "react-router-dom";

export default function Profile() {
	const params = useParams();
	return (
		<div>
			<h1>PROFILE: {params.profileId}</h1>
			<Link to={`/profiles`}>BACK</Link>
		</div>
		
	)
}