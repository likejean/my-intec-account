import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Flex, Button, Space, Input } from 'antd';

export default function NotesPage(props) {
	
	const textInput = useRef(null);

	let addNote = () => {				
		props.addNewNote();
	}

	let inputOnChangeHandler = (e) => {
		props.changeNewNote(e.target.value);
	}
	
	return (
		<div>
			<Flex wrap gap="small">
				<Space direction="vertical" size="middle" style={{ display: 'flex', margin: 40 }}>
				
					{props.state.notesPage.notes.map((item) => (	
						<Link key={item.id} to={`/notes/${item.id}`}>Note-{item.id}: {item.topic}</Link>
					))}
					
					{/* Add new Note */}
					
					<Input
						value={props.state.newNoteText}
						onChange={inputOnChangeHandler}
						ref={textInput}
						placeholder="Enter new note here"
						
					/>
					<Button type="primary" onClick={ addNote }>
						Save Note
					</Button>
				</Space>
			</Flex>			
			<Outlet />			
		</div>
	);
}