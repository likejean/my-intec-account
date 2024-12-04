import { Button, Space, Badge, Card } from "antd";
import { useParams, Link, useOutletContext } from "react-router-dom";

export default function Note() {
	const params = useParams();	
	const { notes } = useOutletContext();
	const selectedNote = notes.find(note => note.id === Number(params.noteId));
	
	return (
		<div>
			<Space direction="vertical" size={16}>
				<Card title={`Note${params.noteId} - ${selectedNote.topic}`} extra={<a href="/notes">Back</a>} style={{ width: 300 }}>					
					<Space direction="vertical">
						{selectedNote && selectedNote.comments.map((comment, idx) => (							
							<Badge key={idx} status="success" text={comment.question} />
						))}						
					</Space>					
					<p>{selectedNote.conclusion}</p>
					<Button>ADD</Button>
				</Card>				
			</Space>
		</div>
		
	)
}