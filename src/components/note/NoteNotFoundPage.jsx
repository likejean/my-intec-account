import { Link } from "react-router-dom";

export default function NoteNotFoundPage() {
	return (
		<div>
			<h1>Error 404: NOTE Not Found</h1>
			<Link to="/notes">Notes</Link>
		</div>
		
	)
}