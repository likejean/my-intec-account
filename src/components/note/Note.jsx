import { useParams, Link } from "react-router-dom";

export default function Note() {
	const params = useParams();
	return (
		<div>
			<h1>NOTE: {params.noteId}</h1>
			<Link to={`/notes`}>BACK</Link>
		</div>
		
	)
}