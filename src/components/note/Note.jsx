import { Button, Space, Card } from "antd";
import { useParams, Link, useOutletContext } from "react-router-dom";

export default function Note() {
	const params = useParams();	
	const { notes } = useOutletContext();
	const selectedNote = notes.find(note => note.id === Number(params.noteId));
	
	return (
		<div>
			<Space direction="vertical" size={16}>
				<Card title={`Note${params.noteId} - ${selectedNote.topic}`} extra={<a href="/notes">Back</a>} style={{ width: 300 }}>
					{selectedNote && selectedNote.comments.map((comment, idx) => (
						<p key={idx}>{comment}</p>
					))}
					<Link to={`/notes`}><Button>BACK</Button></Link>
				</Card>				
			</Space>
		</div>
		
	)
}