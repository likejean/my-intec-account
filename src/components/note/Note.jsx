import { Button, Space, Badge, Card, Row, Col } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useParams, useOutletContext } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function Note() {
	const params = useParams();	
	const { notes } = useOutletContext();
	const selectedNote = notes.find(note => note.id === Number(params.noteId));
	
	return (
		<div>
			<Space direction="vertical" size={24}>
				<Card title={`Note${params.noteId} - ${selectedNote.topic}`} extra={<a href="/notes">Back</a>} style={{ width: 400 }}>					
					<Space direction="vertical" style={{display: "inline"}}>
						{selectedNote && selectedNote.comments.map((comment, idx) => (	
							<Row key={idx}>
								<Col span={21}>									
									<Badge  status="success" text={comment.question} />									
								</Col>
								<Col span={2}><EditOutlined /></Col>
								<Col span={1}><DeleteOutlined /></Col>
							</Row>
						))}						
					</Space>					
					<p>{selectedNote.conclusion}</p>
					<Button>ADD</Button>					
					<NavLink to={`/notes/${params.noteId}/comments`}><Button>COMMENTS</Button></NavLink>
				</Card>				
			</Space>
			<Space direction="vertical">
				<Outlet context={{comments: selectedNote.comments}}/>	
			</Space>
		</div>
		
	)
}