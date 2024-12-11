import { useParams, NavLink, useOutletContext } from "react-router-dom";

export default function Comment() {
	const params = useParams();
	const { comments } = useOutletContext();
	const selectedComment = comments.find(note => note.id === Number(params.commentId));
	
	return (
		<div>
			<h1>{selectedComment.question}</h1>
			<p>{selectedComment.details}</p>
			<NavLink to={`/notes/${params.noteId}/comments`}>BACK</NavLink>
		</div>
		
	)
}