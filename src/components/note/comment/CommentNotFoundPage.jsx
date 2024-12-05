import { Link } from "react-router-dom";

export default function CommentNotFoundPage() {
	return (
		<div>
			<h1>Error 404: COMMENT Not Found</h1>
			<Link to="/notes/:noteId/comments">Back</Link>
		</div>
		
	)
}