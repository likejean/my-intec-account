import { createRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Flex, Button, Space } from 'antd';



export default function NotesPage(props) {
	const notes = [1, 2, 3, 4, 5, 6];

	const newUserNote = createRef();

	console.log(props.state.notes);


	let addNote = () => {	
			
		console.log(newUserNote.current.value);
		console.log(props.addNewNote(newUserNote.current.value));
		console.log(props.state.notes);
	}
	
	return (
		<div>
			<Flex wrap gap="small">
				<Space direction="vertical" size="middle" style={{ display: 'flex', margin: 40 }}>
				
					{notes.map((item) => (	
						<Link key={item} to={`/notes/${item}`}>Note {item}</Link>
					))}
					
					{/* Add new Note */}
					
					<textarea ref={newUserNote}>

					</textarea>
					
					<Button type="primary" onClick={ addNote }>
						Save Note
					</Button>
				</Space>
			</Flex>			
			<Outlet />			
		</div>
	);
}