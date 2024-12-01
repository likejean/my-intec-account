import { Button } from "antd";
import { useParams, Link, useOutletContext } from "react-router-dom";

export default function Note(props) {
	const params = useParams();
	const { selectedNote } = useOutletContext();
	return (
		<div>
			<h1>NOTE{params.noteId}: {selectedNote.topic}</h1>			
			{selectedNote && selectedNote.comments.map((comment, idx) => (
				<p key={idx}>{comment}</p>
			))}
			<Link to={`/notes`}><Button>BACK</Button></Link>
		</div>
		
	)
}