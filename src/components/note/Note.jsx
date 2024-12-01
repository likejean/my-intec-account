import { useParams, Link, useOutletContext } from "react-router-dom";

export default function Note(props) {
	const params = useParams();
	const { allComments } = useOutletContext();
	return (
		<div>
			<h1>NOTE: {params.noteId}</h1>			
			{allComments && allComments.map((comment, idx) => (
				<p key={idx}>{comment}</p>
			))}
			<Link to={`/notes`}>BACK</Link>
		</div>
		
	)
}