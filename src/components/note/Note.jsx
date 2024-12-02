import { Button } from "antd";
import { useParams, Link, useOutletContext } from "react-router-dom";

export default function Note() {
	const params = useParams();	
	const { notes } = useOutletContext();

	const selectedNote = notes.find(note => note.id === Number(params.noteId));
	
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